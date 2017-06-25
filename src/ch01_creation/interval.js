import Rx from 'rxjs/rx';

export default function main () {
    const source = Rx.Observable.interval(1000).take(5).merge(
        Rx.Observable.create((observer) => {
            observer.next('인터벌을 시작한다.');
        })
    );

    const subscribe = source.subscribe(val => console.log(val));

}