(ns ^:figwheel-hooks fsm.dev
  (:require [cljs.pprint :as pprint]
            [integrant.core :as ig]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [goog.dom :as gdom]
            [fsm.core :as core]))

(defn dispatcher
  "Simple helper for creating a dispatch function in components"
  [counter]
  (fn [event [k fn-1]]
    (core/transition counter event (fn [sm]
                                     (-> sm
                                         core/current-state
                                         (update k fn-1))))))

(defn application
  [counter]
  (let [state    (core/current-state counter)
        {count :count disabled? :disabled?} state
        dispatch (dispatcher counter)]
    [:div.application
     [:div.container
      [:div.app__column
       [:div.counter
        [:h1.counter__value count]
        [:div.counter__buttons
         [:button {:type "disable"
                   :on-click #(dispatch (if disabled? ::enable ::disable) [:disabled? not])}
          (if (:disabled? state)
            "enable"
            "disable")]
         [:button {:disabled disabled?
                   :type "button"
                   :on-click #(dispatch ::inc [:count inc])} "+"]
         [:button {:disabled disabled?
                   :type "button"
                   :on-click #(dispatch ::dec [:count dec])} "-"]
         [:button {:disabled disabled?
                   :type "button"
                   :on-click #(dispatch ::reset [:count (constantly 0)])} "reset"]]
        [:div#audit-log]]] ;;; #audit-log will be populated purely by side effects
      [:div.app__column.fsm_state
       [:pre
        [:code (with-out-str (pprint/pprint state))]]]]]))

;;; Dev System

(def config
  {::counter {:states       {nil        {::init ::counting}
                             ::counting {::inc     ::counting
                                         ::dec     ::counting
                                         ::reset   ::counting
                                         ::disable ::disabled}
                             ::disabled {::enable  ::counting}}
              :initial-state {:count 0
                              :disabled? false}}
   ::ui      {:counter (ig/ref ::counter)}})

(defn write-log
  "A function that is used to write to a fixed #audit-log element"
  [text]
  (let [log   (gdom/getElement "audit-log")
        p     (gdom/createElement "p")
        code  (gdom/createElement "code")
        entry (gdom/createTextNode text)]
    (when log
      (gdom/appendChild code entry)
      (gdom/appendChild p code)
      (gdom/insertChildAt log p 0))))

(defn on-change
  "Let's write to a log for every state change"
  [_ _ state]
  (write-log (with-out-str (pprint/pprint state))))

(defmethod ig/init-key ::counter [_ {:keys [states initial-state]}]
  (-> (core/create-state-machine states initial-state r/atom)
      (core/add-effect ::log on-change)
      (core/add-effect ::disabled ::counting ::disabled #(write-log "Disabled"))
      (core/add-effect ::enabled ::disabled ::counting #(write-log "Enabled"))
      (core/transition ::init core/current-state)))

(defmethod ig/resume-key ::counter [_ _ _ prev]
  prev)

(defmethod ig/init-key ::ui [_ {:keys [counter]}]
  (rdom/render
   [application counter]
   (.getElementById js/document "application")))

(defonce system (ig/init config))

;;; Development

(defn restart []
  (ig/suspend! system)
  (ig/resume config system))

(defn ^:after-load after-reload []
  (restart))
