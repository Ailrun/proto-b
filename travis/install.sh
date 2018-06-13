#!/usr/bin/env bash
set -ev

case $BUILD_TARGET in
    'client')
        cd client
        ;;
    'server')
        cd server
        ;;
esac

npm install > /dev/null
cd ..

set +ev
