#!/usr/bin/env bash
set -ev

case $BUILD_TARGET in
    'client-ts')
        cd client-ts
        ;;
    'server')
        cd server
        ;;
esac

npm install > /dev/null
cd ..

set +ev
