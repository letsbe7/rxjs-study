import Rx, { Observable } from 'rxjs/rx';

export default function main (...args) {
    //  굉장히 광범위하게 사용된다.
    //  특히 user input을 통제하는 상황에서 자주 사용되고 있다.

    const input = document.getElementById('example');

    //  keyup할 때마다 스트림이 발생
    const example = Observable
        .fromEvent(input, 'keyup')
        .map(i => i.currentTarget.value);

    
    //  위의 스트림을 가공한다.
    //  0.5s 사이의 값들은 버린다.
    const debouncedInput = example.debounceTime(500);

    const subscribe = debouncedInput.subscribe(val => console.log(val));

}