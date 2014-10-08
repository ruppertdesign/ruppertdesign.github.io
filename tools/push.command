#!/bin/bash
cd `dirname $0`/..
git add --all .
# TODO ask for message
git commit -m $message
git push origin master
