import Rx from 'rxjs/rx';

export default function () {


    //  즉각적으로 완료되는 스트림이다.
    const emptyStream = Rx.Observable.empty();

    const subscribe = emptyStream.subscribe({
        next: () => console.log('Next'),
        complete: () => console.log('Completed')
    });

}

