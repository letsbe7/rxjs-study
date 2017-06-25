'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    console.log('my_async.js starts----------------------');

    var asyncStream = _rx2.default.Observable.interval(500).take(3).mergeMap(function (val) {
        return _rx2.default.Observable.fromPromise((0, _ajax2.default)(function (data) {
            return data;
        }, 2000));
    });

    asyncStream.subscribe(function (data) {
        return console.log(data);
    });
};

var _rx = require('rxjs/rx');

var _rx2 = _interopRequireDefault(_rx);

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }