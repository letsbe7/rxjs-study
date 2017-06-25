import Rx from 'rxjs/rx';

export default function main () {

    const source = Rx.Observable.fromEvent(document, 'click');

    const example = source.map(event => `Event time: ${event.timeStamp}`);

    const subscribe = example.subscribe(val => console.log(val));
}