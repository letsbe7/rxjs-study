import { Observable } from 'rxjs/rx';

export default function main (...args) {
    const source = Observable.range(1, 10);

    const subscribe = source.subscribe(val => console.log(val));

}