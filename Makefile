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

# `make deploy <username>` の2語目以降をGITHUBユーザー名として取り出す。
# 余分な語は何もしないダミーターゲットにして「ターゲット未定義」エラーを防ぐ。
# TODO: 引数なしの `make deploy` 単体でもデプロイできるようにする案は現時点では保留。
#       （GIT_USER のデフォルト値を設定する等。対応する場合は DEPLOY_USER の既定値を検討）
ifeq (deploy,$(firstword $(MAKECMDGOALS)))
  DEPLOY_USER := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(DEPLOY_USER):;@:)
endif

define DEPLOY
GIT_USER=$(DEPLOY_USER) yarn deploy
endef
export DEPLOY

.PHONY: start
start:
	echo "$${START}" | $(SHELL)

.PHONY: build
build:
	echo "$${BUILD}" | $(SHELL)

.PHONY: serve
serve:
	echo "$${SERVE}" | $(SHELL)

.PHONY: deploy
deploy:
	echo "$${DEPLOY}" | $(SHELL)

# デフォルトターゲット
.DEFAULT_GOAL := build
