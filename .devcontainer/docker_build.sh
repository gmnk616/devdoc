#!/bin/bash
# シェルオプションを有効にする(失敗したら終了)
set -e

# dockerイメージ名
IMAGE=gmnk/devdoc-dev

# shellcheck disable=SC1091
. "${HOME}"/wslenv/docker_build_push.sh
docker_build_push "$@" -i ${IMAGE}
