ARG WD_PATH=/pv-devdoc/
# Dockerイメージ
ARG IMAGE=node:22.13.1-bookworm-slim
# yarnのver(変数名が`YARN_****`の場合、Dockerfile内で`yarn install`でエラーとなる)
ARG VERSION_YARN=4.9.2

FROM $IMAGE

# localsは日本語入力に必要
RUN apt-get update \
    && apt-get install -y curl \
    && apt-get install -y jq \
    && apt-get install -y git \
    && apt-get install -y vim \
    && apt-get install -y make \
    && apt-get install -y locales

# アプリケーションディレクトリを作成
ARG WD_PATH
WORKDIR ${WD_PATH}

# yarnを設定
# `corepack enable npm`コマンドでnpmコマンドを使用禁止にする
ARG VERSION_YARN
RUN npm -g config set registry "https://registry.yarnpkg.com/" && \
    corepack enable && \
    corepack prepare yarn@${VERSION_YARN} --activate && \
    corepack enable npm

# ホットリロードを有効
ENV WATCHPACK_POLLING=true

# プロキシの値を設定
ARG http_proxy
ARG https_proxy
ENV HTTP_PROXY=${http_proxy}
ENV HTTPS_PROXY=${https_proxy}

# 日本語入力を設定(Linuxコンソール上で日本語入力を行うための設定)
# 以下設定を適用したい場合は一旦`devdoc_root`のvolumeを削除してから、再度dockerコンテナを起動します
ENV LANG=ja_JP.UTF-8
ENV LANGUAGE=ja_JP:jp
ENV LC_ALL=ja_JP.UTF-8
RUN locale-gen ja-JP.UTF-8 && \
    localedef -f UTF-8 -i ja_JP ja_JP
