'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    //  즉각적으로 완료되는 스트림이다.
    var emptyStream = _rx2.default.Observable.empty();

    var subscribe = emptyStream.subscribe({
        next: function next() {
            return console.log('Next');
        },
        complete: function complete() {
            return console.log('Completed');
        }
    });
};

var _rx = require('rxjs/rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }