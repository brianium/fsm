.PHONY: clean
clean:
	clj -T:build clean

target/public:
	clj -M:web/dev:web/demo
	clj -T:build copy-public

target/vocloj.jar:
	clj -T:build jar
