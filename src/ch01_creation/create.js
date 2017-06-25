import Rx from 'rxjs/rx';

export default function () {
    const hello = Rx.Observable.create(function (observer) {
        observer.next('Hello');
        observer.next('World');
    });

    const subscribe = hello.subscribe(val => console.log(val));





    const evenNumbers = Rx.Observable.create(observer => {
        let value = 0;
        const interval = setInterval(() => {
            if (value % 2 === 0) {
                observer.next(value);
            }
            value = value + 1;
        }, 1000);

        return () => clearInterval(interval);
    });

    const subscribe2 = evenNumbers.subscribe(val => console.log(val));

    setTimeout(() => {
        subscribe2.unsubscribe();
    }, 10000);


}