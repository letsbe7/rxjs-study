'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = main;

var _rx = require('rxjs/rx');

function main() {
    var source = _rx.Observable.range(1, 10);

    var subscribe = source.subscribe(function (val) {
        return console.log(val);
    });
}