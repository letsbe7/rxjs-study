import { Observable } from 'rxjs/rx';

export default function main (...args) {

    //  사실 이 메서드보다는 transformation계통의 concatMap을 더 많이 사용한다고 한다.

    const source = Observable.interval(2000);
    const example = source
        .map(val => Observable.of(val + 10))
        .concatAll();

    example.subscribe(val => console.log(val));
}