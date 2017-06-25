'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = main;

var _rx = require('rxjs/rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
    var source = _rx2.default.Observable.interval(1000).take(5).merge(_rx2.default.Observable.create(function (observer) {
        observer.next('인터벌을 시작한다.');
    }));

    var subscribe = source.subscribe(function (val) {
        return console.log(val);
    });
}