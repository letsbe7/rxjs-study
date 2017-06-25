var generator = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];

export default function ajax (cb = (data) => data, time = 1000) {
    return new Promise((success, error) => {
        setTimeout(function () {
            success(cb(generator.shift()));
        }, time);
    });


};