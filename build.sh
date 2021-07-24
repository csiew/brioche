#!/bin/sh

sh build-style-map.sh

cp src/App.css dist/App.css
cp -r src/assets dist/assets
cp -r src/styles dist/styles

rm dist/*/.DS_Store
