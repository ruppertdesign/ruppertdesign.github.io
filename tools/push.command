#!/bin/bash
cd `dirname $0`/..

echo "Please enter a commit message:"
read message

git add --all .
git commit -m "$message"
git push origin master
