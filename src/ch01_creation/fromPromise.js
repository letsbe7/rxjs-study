import Rx from 'rxjs/rx';

export default function main () {

    // 물론 그냥 from을 사용할 수도 잇다.

    const myPromise = (willReject) => {
        return new Promise((resolve, reject) => {
            if (willReject) {
                reject('Rejected');
            }
            resolve('Resolved');
        });
    };

    const source = Rx.Observable.of(true, false);

    const example = source
        .mergeMap(val => Rx.Observable
            .fromPromise(myPromise(val))
            .catch(err => Rx.Observable.of(`Error: ${err}`))
        );
    
    const subscribe = example.subscribe(val => console.log(val));
}