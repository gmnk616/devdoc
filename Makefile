define START
yarn start
endef
export START

define BUILD
yarn build
endef
export BUILD

define SERVE
yarn serve
endef
export SERVE

.PHONY: start
start:
	echo "$${START}" | $(SHELL)

.PHONY: build
build:
	echo "$${BUILD}" | $(SHELL)

.PHONY: serve
serve:
	echo "$${SERVE}" | $(SHELL)

# デフォルトターゲット
.DEFAULT_GOAL := build
