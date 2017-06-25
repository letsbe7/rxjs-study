import { Observable } from 'rxjs/rx';

export default function main (...args) {
    const source1 = Observable.of(1, 2, 3);
    const source2 = Observalbe.of(4, 5, 6);
    const example = source1.concat(source2);

    example.subscribe(val => console.log(val));

}