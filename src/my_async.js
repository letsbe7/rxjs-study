import Rx from 'rxjs/rx';
import ajax from './ajax';


export default function () {
    console.log('my_async.js starts----------------------');

    var asyncStream = Rx.Observable.interval(500).take(3).mergeMap(
    val => Rx.Observable.fromPromise(ajax(data=>data, 2000))
    );

    asyncStream.subscribe(data => console.log(data));
}
