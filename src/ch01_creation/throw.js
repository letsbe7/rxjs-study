import { Observable } from 'rxjs/rx';

export default function main () {

    const source = Observable.throw('이것은 에러이다.');

    const subscribe = source.subscribe({
        next: val => console.log(val),
        complete: () => console.log('completed'),
        error: val => console.log(`Error: ${val}`)
    });


}
