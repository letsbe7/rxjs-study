import * as React from 'react';
import { Subject, Observable } from 'rxjs/rx';
import * as moment from 'moment';


const PageHeader = () => <div className="page-header">
    <h1>MomentJS 예제</h1>
    <p className="lead">TypeScript + RxJS + ReactJS + Webpack + MomentJS</p>
</div>


const target = moment('2017-07-09 09:30:26.123');
const now    = moment();

const diff = target.isSameOrAfter(now, 'day');
console.log(diff);

target.format('');

export default class App extends React.Component<any, any> {
    render () {
        return <div>
            <PageHeader />
        </div>
    }
}