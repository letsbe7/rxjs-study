'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = main;

var _rx = require('rxjs/rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {

    // 물론 그냥 from을 사용할 수도 잇다.

    var myPromise = function myPromise(willReject) {
        return new Promise(function (resolve, reject) {
            if (willReject) {
                reject('Rejected');
            }
            resolve('Resolved');
        });
    };

    var source = _rx2.default.Observable.of(true, false);

    var example = source.mergeMap(function (val) {
        return _rx2.default.Observable.fromPromise(myPromise(val)).catch(function (err) {
            return _rx2.default.Observable.of('Error: ' + err);
        });
    });

    var subscribe = example.subscribe(function (val) {
        return console.log(val);
    });
}