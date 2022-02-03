#_{:clj-kondo/ignore [:refer-all]}
(ns fsm.core-test
  (:require [clojure.test :refer [deftest testing is]]
            [fsm.core :refer :all]))

(def states {nil       {::init ::ready}
             ::ready   {::stop  nil
                        ::start ::started}
             ::started {::stop nil}})

(def initial-state {})

(deftest transition-test
  (testing "transitioning from a nil state to a new state"
    (let [fsm (create-state-machine states initial-state)]
      (transition fsm ::init)
      (is (= ::ready (-> fsm current-state :fsm/state)))))
  (testing "transitioning to a nil state from a non-nil state"
    (let [fsm (create-state-machine states initial-state)]
      (-> fsm
          (transition ::init)
          (transition ::stop)
          (transition nil))
      (is (nil? (-> fsm current-state :fsm/state)))))
  (testing "transitioning with an invalid event"
    (let [fsm (create-state-machine states initial-state)]
      (transition fsm ::create)
      (is (nil? (-> fsm current-state :fsm/state))))))

(deftest add-effect-test
  (testing "effect is invoked for general state changes"
    (let [*current (atom {})
          fsm      (create-state-machine states initial-state)]
      (-> fsm
          (add-effect ::track #(reset! *current %3))
          (transition ::init {:init? true}))
      (is (= @*current {:fsm/state ::ready :fsm/last-event ::init :init? true}))))
  (testing "effect is invoked for explicit state changes"
    (let [*current (atom {})
          fsm      (create-state-machine states initial-state)]
      (-> fsm
          (add-effect ::track nil ::ready #(reset! *current %3))
          (transition ::init {:init? true}))
      (is (= @*current {:fsm/state ::ready :fsm/last-event ::init :init? true}))))
  (testing "effect is invoked for a set of state changes"
    (let [*audit (atom [])
          fsm      (create-state-machine states initial-state)]
      (-> fsm
          (add-effect ::shutdown #{::started ::ready} nil (fn [_ old _] (swap! *audit conj (:fsm/state old))))
          (transition ::init {:init? true})
          (transition ::stop)
          (transition ::init)
          (transition ::start)
          (transition ::stop))
      (is (= @*audit [::ready ::started])))))
