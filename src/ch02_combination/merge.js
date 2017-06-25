import { Observable } from 'rxjs/rx';

export default function main (...args) {
    //  concat과 유사함. 허나 merge가 처리율(throughput)이 조금 더 좋다.

    const first = Observable.interval(2500).take(1);
    const second = Observable.interval(2000).take(2);
    const third = Observable.interval(1500).take(4);
    const fourth = Observable.interval(1000).take(6);
    const fifth = Observable.interval(500).take(20);

    const example = Observable.merge(
        first.mapTo('FIRST'),
        second.mapTo('SECOND'),
        third.mapTo('THIRD'),
        fourth.mapTo('FOURTH'),
        fifth.mapTo('0.5s fifth')
    );

    example.subscribe(val => console.log(val));
}