import Rx, { Observable } from 'rxjs/rx'

export default function main (...args) {

    const interval = Observable.interval(100)

    const source = interval.take(5).ignoreElements();

    const subscribe = source.subscribe(
        val => console.log(`success: ${val}`),
        val => console.log(`error: ${val}`),
        val => console.log(`completed: ${val}`)
    );
}

function someSample () {

    const $ = {
        ajax (o) {
            const deferred = new Promise();
            setTimeout(() => {
                Promise.resolve('그래!')
            }, 1000);
            return deferred;
        }
    };

    const defaultOption = {
        isShowMessage: false,
        isShowProgressBar: false,
        successMessage: ''
    }

    const HttpService = {
        send (o) {
            if (options.url) throw new Error('url은 필수다.');
            const options = Object.assign({}, defaultOptions, o);
            return $.ajax(o);
        }
    }

    HttpService.send({
        name: 'sjh'
    })
    .then(
        data => console.log(data)
    )
}