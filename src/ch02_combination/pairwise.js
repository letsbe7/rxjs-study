import Rx from 'rxjs/rx';

export default function main (...args) {

    //  Emit the previous and current values as an array.

    var interval = Rx.Observable.interval(1000);

    interval.pairwise()
            .take(5)
            .subscribe(val => console.log(val));

}