import { Observable } from 'rxjs/rx';

export default function main (...args) {

    //  zip과 유사함.

    const myPromise = val => new Promise((resolve, reject) => {
        console.log('my promise starts');
        setTimeout(function () {
            resolve(`Promise resolved after 5s!: ${val}`);
        }, 5000);
    });

    const example = Observable.forkJoin(
        Observable.of('Hello?'),
        Observable.of('World').delay(1000),
        Observable.interval(1000).take(1),
        Observable.interval(1000).take(3),
        myPromise('forkJoin!')
    );

    example.subscribe(val => console.log(val));


    const example2 = Observable.zip(
        Observable.of('Hello?'),
        Observable.of('World').delay(1000),
        Observable.interval(1000).take(1),
        Observable.interval(1000).take(3),
        myPromise('zip!')
    );

    example2.subscribe(val => console.log(val));




    const queue = Observable.of([1, 2, 3, 4, 5]);
    const example3 = queue
        .mergeMap(q => Observable.forkJoin(...q.map(myPromise)));
    
    example3.subscribe(val => console.log(val));

}