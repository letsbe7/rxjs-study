import Rx, { Observable } from 'rxjs/rx';

export default function main (...args) {
    //  discard emitted values that take lee than the specified time, based on selector function, between output
    //  though not as widely used as debounceTime, debounce is important when the debounce rate is variable

    const example = Observable.of('wait', 'one', 'second', 'last will display', 'one more');

    const debounceExample = example.debounce(() => Observable.timer(1000));
    const subscribe = debounceExample.subscribe(val => console.log(val));


    const interval = Observable.interval(1000);
    const debouncedInterval = interval.debounce(val => Observable.timer(val * 200));

    const subscribe2 = debouncedInterval.subscribe(val => console.log(val));

}