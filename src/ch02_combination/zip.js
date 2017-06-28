import Rx, { Observable } from 'rxjs/rx';

export default function main (...args) {

    //  TL;DR: After all observables emit, emit values as an array
    //  combined with interval or timer, zip can be used to time output from another source!


    const source1 = Rx.Observable.of('Hello');
    const source2 = Rx.Observable.of('Hello!');
    const source3 = Rx.Observable.of('GoodBye');
    const source4 = Rx.Observable.of('world!');

    const example = Rx.Observable
        .zip(
            source1,
            source2.delay(1000),
            source3.delay(2000),
            source4.delay(3000)
        );
    
    const subscribe = example.subscribe(val => console.log(val));



    const interval = Rx.Observable.interval(1000);
    const example2 = Rx.Observable
        .zip(
            interval,
            interval.take(2)
        );
    const subscribe2 = example2.subscribe(val => console.log(val));
}