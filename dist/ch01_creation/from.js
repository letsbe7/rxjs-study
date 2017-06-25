'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    //  observable from array
    var arraySource = _rx2.default.Observable.from([1, 2, 3, 4, 5]);
    var subscribe1 = arraySource.subscribe(function (val) {
        return console.log(val);
    });

    //  observable from promise

    var promiseSource = _rx2.default.Observable.from(new Promise(function (resolve) {
        console.log('inner promise\' resolve');
        setTimeout(function () {
            resolve('1.5s after Promised Hello world');
        }, 1500);
    }));
    var subscribe4 = promiseSource.subscribe(function (val) {
        return console.log(val);
    });

    var map = new Map();
    map.set(1, 'HI');
    map.set(2, 'Bye');

    var mapSource = _rx2.default.Observable.from(map);
    var subscribe2 = mapSource.subscribe(function (val) {
        return console.log(val);
    });

    //  observablefrom string

    var stringSource = _rx2.default.Observable.from('Hello world');
    var subscribe3 = stringSource.subscribe(function (val) {
        return console.log(val);
    });
};

var _rx = require('rxjs/rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }