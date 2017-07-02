import * as React from 'react';
import { Subject, Observable, BehaviorSubject } from 'rxjs/rx';

const PageHeader = () => <div className="page-header">
    <h1>RxJS를 이용한 Time Flies 예제</h1>
    <p className="lead">마우스를 따라다니는 글자</p>
</div>

export default class extends React.Component<undefined, undefined> {
    render () {
        main();
        return <div>
            <PageHeader />
        </div>
    }
}


interface OffsetInfo {
    top: number;
    left: number;
}

function getOffset (element: Element): OffsetInfo {
    const doc = element.ownerDocument,
          docElem = doc.documentElement,
          body = doc.body,
          clientTop = docElem.clientTop || body.clientTop || 0,
          clientLeft = docElem.clientLeft || body.clientLeft || 0,
          scrollTop = window.pageYOffset,
          scrollLeft = window.pageXOffset;
    return {
        top: scrollTop - clientTop,
        left: scrollLeft - clientLeft
    }
}

function main () {
    const text = 'TIME FLIES LIKE AN ARROW';
    const container = document.querySelector('#absolute_container');
    const mousemove = Observable.fromEvent(document, 'mousemove');
    const offset = getOffset(container);

    const mouseMoveOffset = mousemove.map((e: MouseEvent) => {
        return {
            offsetX: e.clientX - offset.left + document.documentElement.scrollLeft,
            offsetY: e.clientY - offset.top + document.documentElement.scrollTop
        }
    });

    Observable.from(text).flatMap(
        function (letter, i) {
            const s = document.createElement('span');
            s.innerHTML = letter;
            s.style.position = 'absolute';
            container.appendChild(s);
            return mouseMoveOffset.delay(i * 100).map((pos) => {
                return {
                    pos,
                    element: s,
                    index: i
                }
            });
        }
    )
    .subscribe(data => {
        data.element.style.top = data.pos.offsetY + 'px';
        data.element.style.left = data.pos.offsetX + data.index * 10 + 15 + 'px';
    });
}



