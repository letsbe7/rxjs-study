'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = main;

var _rx = require('rxjs/rx');

function main() {

    var source = _rx.Observable.throw('이것은 에러이다.');

    var subscribe = source.subscribe({
        next: function next(val) {
            return console.log(val);
        },
        complete: function complete() {
            return console.log('completed');
        },
        error: function error(val) {
            return console.log('Error: ' + val);
        }
    });
}