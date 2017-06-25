import { Observable } from 'rxjs/rx';

export default function main (...args) {
    
    //  1초뒤 한번만 실행
    const source = Observable.timer(1000);
    const subscribe = source.subscribe(val => console.log(val));


    //  1초뒤 한번, 그 다음에 2초마다 한번씩
    const source2 = Observable.timer(1000, 2000);
    const subscribe2 = source2.subscribe(val => console.log(val));

    setTimeout(() => {
        subscribe2.unsubscribe();
    }, 6000);

}
