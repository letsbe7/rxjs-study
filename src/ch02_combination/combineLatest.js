import { Observable } from 'rxjs/rx';

export default function main (...args) {

    const timerOne = Observable.timer(1000, 4000);
    const timerTwo = Observable.timer(2000, 4000);
    const timerThree = Observable.timer(3000, 4000);

    const combined = Observable.combineLatest(timerOne, timerTwo, timerThree);

    const subscribe = combined.subscribe(latestValues => {
        const [v1, v2, v3] = latestValues;
        console.log(
            `
            Timer One Latest: ${v1},
            Timer Tow Latest: ${v2},
            Timer Three Latest: ${v3},
            `
        );
    });


    //  이런 방식을 projected라고 한다.
    const combined2 = Observable.combineLatest(
        timerOne, timerTwo, timerThree,
        (v1, v2, v3) => {
            return `
            projected latest: ${v1},
            projected latest: ${v2},
            projected latest: ${v3},
            `;
        }
    );

    const subscribe2 = combined2.subscribe(val => console.log(val));




    //  2개의 버튼 이벤트를 합치는 방법
    const setHtml = id => val => document.getElementById(id).innerHTML(val);

    const addOneClick$ = id => Observable
        .fromEvent(document.getElementById(id), 'click')
        .mapTo(1)
        .startWith(0)
        .scan((acc, curr) => acc + curr)
        .do(setHtml(`${id}Total`));

    const combineTotal$ = Observable
        .combineLatest(
            addOneClick$('red'),
            addOneClick$('black')
        )
        .map(([val1, val2]) => val1 + val2)
        .subscribe(setHtml('total'));
    

    `
    <div>
        <button id='red'>Red</button>
        <button id='black'>Black</button>
    </div>
    <div id="redTotal"></div>
    <div id="blackTotal"></div>
    <div id="total"></div>
    `;
}