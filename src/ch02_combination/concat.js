import { Observable } from 'rxjs/rx';

export default function main (...args) {

    //  배출 순서가 중요하지 않다면 그냥 merge를 쓰는 것이 낫다고 한다.

    //  인스턴스끼리 합치기
    const source1 = Observable.of(1, 2, 3);
    const source2 = Observable.of(4, 5, 6);
    const example = source1.concat(source2);

    example.subscribe(val => console.log(`방법1: ${val}`));

    //  스태틱 메소드로 합치기
    const example2 = Observable.concat(source1, source2);
    example2.subscribe(val => console.log(`방법2: ${val}`));

    //  delay된 소스와 합치기
    const delayed = source1.delay(3000);
    const example3 = delayed.concat(source2);
    example3.subscribe(val => console.log(`delayed: ${val}`));

    

}