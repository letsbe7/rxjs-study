import Rx, { Observable } from 'rxjs/rx';

export default function main (...args) {

    const source = Observable.of('World', 'Good bye', 'World');

    source.startWith('Hello')
          .scan((acc, curr) => `${acc} ${curr}`)
          .subscribe(val => console.log(val));

    

    const source2 = Observable.of(1, 2, 3, 4, 5);
    
    source2.startWith(-3, -2, -1, 0)
           .subscribe(val => console.log(val));
}