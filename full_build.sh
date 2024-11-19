#!/bin/sh
cd packages/ipyreact-tsxlib
npm install
npm run build
cd ../bundled-staging
npm install
npm run bundle
hatch build
