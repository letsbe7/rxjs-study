import Rx, { Observable } from 'rxjs/rx'


export default function main (...args) {

    const source = Observable.from([1, 2, 3, 4, 5]);

    //  selector 패턴
    const example = source.last(val => val % 2 == 0, val => `2로 나눌 수 있는 가장 큰 값은 ${val}이다.`);
    const subscribe = example.subscribe(val => console.log(val));

    //  selector 패턴 + default value
    const example2 = source.last(val => val > 5, val => `이건 나오지 않을 메세지`, '그런 수는 없을 걸? ㅎㅎ');
    const subscribe2 = example2.subscribe(val => console.log(val));
}