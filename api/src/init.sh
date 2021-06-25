#!/bin/sh
set -eu

ENVIRON=${ENVIRONMENT:="production"}
APP_HOME="/src"

if [ "$1" = 'start' ]; then
  python3 $APP_HOME/main.py run
elif [ "$1" = 'reset-data' ]; then
  rm -rf /src/sqLite.db
  python3 $APP_HOME/main.py load-data
elif [ "$1" = 'behave' ]; then
  shift
  behave "$@"
else
  exec "$@"
fi


