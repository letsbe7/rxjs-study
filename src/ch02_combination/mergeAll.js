import { Observable } from 'rxjs/rx';

export default function main (...args) {
    //  그냥 mergeMap을 사용하는 편이 낫다.

    const myPromise = val => new Promise((resolve, reject) => {
        setTimeout(() => resolve(`RESULT: ${val}`), 1000);
    });

    const source = Observable.of(1, 2, 3);

    const example = source
        .map(val => myPromise(val))
        .mergeAll();

    example.subscribe(val => console.log(val));


    let seq = 1;

    const interval = Observable.interval(500).take(5);
    const example2 = interval
        .map(val => interval.delay(3000).take(3))
        .mergeAll(2)
        .subscribe(val => console.log(`${seq++}: ${val}`));
}