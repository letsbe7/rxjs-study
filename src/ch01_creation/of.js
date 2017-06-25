import { Observable } from 'rxjs/rx';

export default function main (...args) {

    // number of sequence
    args = args || [1, 2, 3, 4, 5];

    const source = Observable.of(...args);
    const subscribe = source.subscribe(val => console.log(val));


    //  심지어 오브젝트와 펑션도 인자로 취할 수 있다.
    const source2 = Observable.of({name: 'sjh'}, function hello () { return 'HELLO!'; });

    const subscribe2 = source2.subscribe(val => console.log(val));

}