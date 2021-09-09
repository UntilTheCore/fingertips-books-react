#!/usr/bin/env bash

# 请确保执行目录为项目根目录

yarn build &&
cd build &&
git init &&
git remote add origin git@github.com:UntilTheCore/fingertips-book-react-website.git &&
git add . &&
git commit -m 'deploy' &&
git branch -M main
git push -u origin main -f &&
cd .. &&
echo "部署完成"
