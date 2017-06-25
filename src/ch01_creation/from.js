import Rx from 'rxjs/rx';

//  array, promise, iterable into observable

export default function () {
    //  observable from array
    const arraySource = Rx.Observable.from([1, 2, 3, 4, 5]);
    const subscribe1 = arraySource.subscribe(val => console.log(val));


    //  observable from promise

    const promiseSource = Rx.Observable.from(new Promise(resolve => {
        console.log('inner promise\' resolve');
        setTimeout(function () {
            resolve('1.5s after Promised Hello world');
        }, 1500);
    }));
    const subscribe4 = promiseSource.subscribe(val => console.log(val));




    const map = new Map();
    map.set(1, 'HI');
    map.set(2, 'Bye');

    const mapSource =Rx.Observable.from(map);
    const subscribe2 = mapSource.subscribe(val => console.log(val));


    //  observablefrom string

    const stringSource = Rx.Observable.from('Hello world');
    const subscribe3 = stringSource.subscribe(val => console.log(val));

}