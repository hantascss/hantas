/*jslint node: true */
'use strict';

var build = require('skeleton-postcss');

build('src/hantas.css', 'dist/hantas.css', 'dist/hantas.min.css');
build('src/hantas-vertical.css', 'dist/hantas-vertical.css', 'dist/hantas-vertical.min.css');
