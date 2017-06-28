import Rx, { Observable } from 'rxjs/rx';

export default function main (...args) {
    //  takeWhile도 참고할 것

    const source = Observable.from([1,2,3,4,5]);
    const example = source.filter(num => num % 2 === 0);
    const subscribe = example.subscribe(val => console.log(val));

    const source2 = Observable.from([{name: 'JOE', age: 31}, {name: 'BOB', age: 25}]);
    const example2 = source2.filter(person => person.age >= 30);
    const subscribe2 = example2.subscribe(val => console.log(val));


}