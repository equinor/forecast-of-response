#!/bin/sh
set -eu

ENVIRON=${ENVIRONMENT:="production"}
APP_HOME="/src"

if [ "$1" = 'start' ]; then
  python3 $APP_HOME/main.py run
elif [ "$1" = 'reset-app' ]; then
  python3 $APP_HOME/main.py reset-app
elif [ "$1" = 'behave' ]; then
  shift
  behave "$@"
else
  exec "$@"
fi


