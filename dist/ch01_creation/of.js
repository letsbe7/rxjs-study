'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = main;

var _rx = require('rxjs/rx');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function main() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    // number of sequence
    args = args || [1, 2, 3, 4, 5];

    var source = _rx.Observable.of.apply(_rx.Observable, _toConsumableArray(args));
    var subscribe = source.subscribe(function (val) {
        return console.log(val);
    });

    //  심지어 오브젝트와 펑션도 인자로 취할 수 있다.
    var source2 = _rx.Observable.of({ name: 'sjh' }, function hello() {
        return 'HELLO!';
    });

    var subscribe2 = source2.subscribe(function (val) {
        return console.log(val);
    });
}