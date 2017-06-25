'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ajax;
var generator = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];

function ajax() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (data) {
        return data;
    };
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

    return new Promise(function (success, error) {
        setTimeout(function () {
            success(cb(generator.shift()));
        }, time);
    });
};