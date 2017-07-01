import Rx, { Observable } from 'rxjs/rx'


export default function (...args) {

    const source = Observable.interval(1000);

    const example = source.sample(Observable.interval(2000));

    const subscribe = example.subscribe(val => console.log(val)); 
}

