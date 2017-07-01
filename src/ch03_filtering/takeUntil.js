import Rx, { Observable } from 'rxjs/rx'

export default function (...args) {

    //  4s까지만 emit을 접수한다.
    const source = Observable.interval(1000);
    const example = source.takeUntil(Observable.timer(4000));
    const subscribe = example.subscribe(val => console.log(val));


    const source2 = Observable.interval(1000);
    const isEven = val => val % 2 == 0;
    const evenSource = source.filter(isEven);
    const evenNumberCount = evenSource.scan((acc, _) => acc + 1, 0);
    const fiveEvenNumber = evenNumberCount.filter(val => val > 5)

    const example2 = evenSource
        .withLatestFrom(evenNumberCount)
            .map(([val, count]) => `${val}, ${count}`)
        .takeUntil(fiveEvenNumber)
        .subscribe(val => console.log(val))

}