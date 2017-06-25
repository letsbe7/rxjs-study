'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = main;

var _rx = require('rxjs/rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {

    var source = _rx2.default.Observable.fromEvent(document, 'click');

    var example = source.map(function (event) {
        return 'Event time: ' + event.timeStamp;
    });

    var subscribe = example.subscribe(function (val) {
        return console.log(val);
    });
}