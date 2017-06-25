'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var hello = _rx2.default.Observable.create(function (observer) {
        observer.next('Hello');
        observer.next('World');
    });

    var subscribe = hello.subscribe(function (val) {
        return console.log(val);
    });

    var evenNumbers = _rx2.default.Observable.create(function (observer) {
        var value = 0;
        var interval = setInterval(function () {
            if (value % 2 === 0) {
                observer.next(value);
            }
            value = value + 1;
        }, 1000);

        return function () {
            return clearInterval(interval);
        };
    });

    var subscribe2 = evenNumbers.subscribe(function (val) {
        return console.log(val);
    });

    setTimeout(function () {
        subscribe2.unsubscribe();
    }, 10000);
};

var _rx = require('rxjs/rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }