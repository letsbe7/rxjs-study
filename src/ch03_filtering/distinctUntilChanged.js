import Rx, { Observable } from 'rxjs/rx';

export default function main (...args) {
    //  only emit when the current value is different than the last
    //  이 메서드는 === 비교를 사용한다. 그러므로 오브젝트의 비교에는 레퍼런스가 같아야 유의미하게 동작함

    const myArraywithDuplicatesInARow = Observable
        .from([1,1,2,2,3,1,2,3]);

    const distinctSub = myArraywithDuplicatesInARow
        .distinctUntilChanged()
        .subscribe(val => console.log('DISTINCT SUB: ', val));

    const nonDistinctSub = myArraywithDuplicatesInARow
        .subscribe(val => console.log('NON DISTINCT SUB: ' + val));
    


    const sampleObject = { name: 'TEST' };

    const myArrayWithDuplicateObjects = Observable
        .from([ sampleObject, sampleObject, sampleObject, { name: 'TEST' } ])
        .distinctUntilChanged()
        .subscribe(val => console.log(val));


}