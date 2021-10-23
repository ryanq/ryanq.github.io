#!/usr/bin/env sh
set -e

npm run build

cd dist
touch .nojekyll

# echo 'www.example.com' > CNAME

git init
git add --all
git commit -m 'deploy'

git remote add github git@github.com:ryanq/ryanq.github.io.git
git push --force github main:gh-pages

cd -
