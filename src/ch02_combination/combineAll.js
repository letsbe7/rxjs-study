import { Observable } from 'rxjs/rx';

export default function main (...args) {

    //  emit every 1s, take 2
    const source = Observable.interval(1000).take(2);

    //  map each emitted value from source to interval observable that takes 5 values
    const example = source.map(val => Observable.interval(1000).map(i => `result: ${val}: ${i}`)).take(5);


    /*
        2 values from source will map to 2 (inner) interval observables that emit every 1s
        combineAll uses combineLatest strategy, emitting the last value from each
        whenever either observable emits a value
    */
    const combined = example.combineAll();
    //const combined = example;

    const subscribe = combined.subscribe(val => console.log(val));

    setTimeout(function() {
        subscribe.unsubscribe();
    }, 10000);

}