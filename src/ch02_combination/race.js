import Rx, { Observable } from 'rxjs/rx';

export default function main (...args) {

    const { interval } = Observable;

    //  맨 처음에 도달한 observable만 살아남아서 계속 emit한다.
    let racer = Observable.race(
        interval(1000).mapTo('1st player(1s)'),
        interval(2000).mapTo('2nd player(2s)'),
        interval(1500).mapTo('3rd player(1.5s')
    );

    racer.subscribe(val => console.log(val));
}