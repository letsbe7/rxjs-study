import { Observable } from 'rxjs/rx';


export default function main (...args) {

    
    var tick = Observable.interval(1000).subscribe(val => console.log(`${val}초----`));
    setTimeout(() => {
        tick.unsubscribe();
    }, 30000);

    //  과연 어떤 비동기 요청이 있을 것인가..?

    //  첫 페이지에 떨어지자마자 필요한 정보들을 다 가져온다.

    const getSrConst = Observable.from(new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('3초걸리는 getStConst');
            resolve(['1027', '1038', '1099']);
        }, 3000);
    }));

    const getSrList = Observable.from(new Promise((resolve, reject) => {
        setTimeout(function() {
            //console.log('4초 걸리 getSrList');
            resolve({
                'T170824': {
                    srNo: 'T170824',
                    regpeNm: '서종효'
                },
                'T170627': {
                    srNo: 'T170627',
                    regpeNm: '장군이'
                }
            });
        }, 6000);
    }));


    const myPromise = (v1, v2) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise가 ${v1}과 ${v2}을 받았습니다.`);
        }, 3000);
    });

    //const combined = Observable.merge(getSrConst, getSrList);
        const combined = Observable.combineLatest(getSrConst, getSrList).map((v1, v2) => myPromise(v1, v2));

    combined.subscribe(val => console.log(val));


    



}