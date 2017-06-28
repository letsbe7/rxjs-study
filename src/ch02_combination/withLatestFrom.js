import Rx, { Observable } from 'rxjs/rx';

export default function main (...args) {
    
    //  If you want the last emission any time a variable number of observables emits, try combinelatest!

    const source = Observable.interval(5000);
    const secondsource = Observable.interval(2000);

    //  반드시 두번째 source가 더 빨리 끝나야 한다.
    source.withLatestFrom(secondsource).map(([v1, v2]) => `v1: ${v1}(5s), v2: ${v2}(2s)`).take(3).subscribe(val => console.log(val));
}


