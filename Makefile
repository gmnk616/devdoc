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
# ユーザー名が省略された場合は `gh api user --jq .login` で現在ログイン中のユーザー名を使用する。
ifeq (deploy,$(firstword $(MAKECMDGOALS)))
  DEPLOY_USER := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  ifneq ($(DEPLOY_USER),)
    $(eval $(DEPLOY_USER):;@:)
  else
    DEPLOY_USER := $(shell gh api user --jq .login)
  endif
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
