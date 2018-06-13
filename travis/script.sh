#!/usr/bin/env bash
set -ev

case $BUILD_TARGET in
    'client')
        cd client
        npm run lint:src
        npm run lint:test
        npm run test -- --coverage --ci -i
        npm run build
        ;;
    'server')
        cd server
esac

cd ..

set +ev
