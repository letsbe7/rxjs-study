import Rx, { Observable } from 'rxjs/rx';

export default function main (...args) {

    //  plain example
    const source = Observable.from([1,2,3,4,5]);
    const first = source.first();
    const subscribe = first.subscribe(val => console.log(val));

    //  with predicate and projection function
    const source2 = Observable.from([1,2,3,4,5]);
    const first2 = source2.first(num => num % 2 === 0, (result, index) => `${result} 는 ${index}`);
    const subscribe2 = first2.subscribe(val => console.log(val));

    //  using default value
    const source3 = Observable.from([1,2,3,4,5]);
    const first3 = source3.first(val => val > 5, val => `value: ${val}`, 'NOTHING');    //  없는 경우에 default를 줄 수가 있다.
    const subscribe3 = first3.subscribe(val => console.log(val));

}