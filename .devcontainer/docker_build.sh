#!/bin/bash
# シェルオプションを有効にする(失敗したら終了)
set -e

# dockerイメージ名
IMAGE=gmnk/devdoc-dev
# docker build時にキャッシュを使用しない場合は`--no-cache`が入る
NO_USE_CACHE=""

# コマンドオプションで引数処理(引数は順不同)
while getopts "c" option
do
  case $option in
    c)
      NO_USE_CACHE="--no-cache"
      ;;
    \?)
      echo "param err" 1>&2
      exit 1
      ;;
  esac
done

# HTTPプロキシの値
FIX_PROXY_VAL=""
# dockerタグ名
TAG="latest"

# dockerイメージ作成
docker image build ${NO_USE_CACHE} \
  --build-arg http_proxy="${FIX_PROXY_VAL}" \
  --build-arg https_proxy="${FIX_PROXY_VAL}" \
  -t "${IMAGE}":"${TAG}" .
