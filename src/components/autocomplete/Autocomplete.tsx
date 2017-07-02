import * as React from 'react';
import service from './service';
import { Subject, Observable } from 'rxjs/rx';


const PageHeader = () => <div className="page-header">
    <h1>RxJS Autocomplete 예제</h1>
    <p className="lead">TypeScript + RxJS + ReactJS + Webpack</p>
</div>


interface FormProps {
    handleKeyup: React.EventHandler<any>;
}

class FormControl extends React.Component<FormProps, AppState> {
    render () {
        return <div className="row-fluid">
            <form role="form">
                <div className="form-group">
                    <label>Enter Query for Wikipedia</label>
                    <input type="text" className="form-control" placeholder="Enter Query" onKeyUp={this.props.handleKeyup}/>
                </div>
            </form>
        </div>
    }
}

interface ResultProps {
    elems:Array<WikiResult>;
}

class ResultPanel extends React.Component<ResultProps, undefined> {
    render () {
        return <div className="row-fluid">
            <ul>
                {this.props.elems.map(elem => <li title={elem.title}><a target="_blank" href={elem.link}>{elem.keyword}</a></li>)}
            </ul>
        </div>
    }
}


interface WikiResult {
    keyword: string;
    title: string;
    link: string;
}

interface AppState {
    count: number;
    text: string;
    elems: Array<WikiResult>;
}

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export default class App extends React.Component<undefined, AppState> {

    private textEventEmitter: Subject<string>;

    constructor () {
        super();
        this.state = {
            text: '',
            elems: [],
            count: 0
        }
        this.textEventEmitter = new Subject<string>();
        this.textEventEmitter.filter((text: string) => text.length > 2)
            .debounceTime(750)
            .distinctUntilChanged()
            .withLatestFrom()
            .flatMap(service)
            .subscribe(this.handleSubscribe.bind(this));
    }

    handleKeyup (evt: HTMLInputEvent): void {
        const value: string = evt.target.value;
        this.textEventEmitter.next(value);
    }

    handleSubscribe (data: any) {
        const [keyword, keywords, titles, links ] = data;

        const elems: Array<WikiResult> = [];
        for (var i = 0, l = keywords.length; i < l; i++) {
            elems.push({
                keyword: keywords[i],
                title: titles[i],
                link: links[i]
            });
        }

        this.setState({
            elems
        });
    }

    render () {

        const { elems } = this.state;

        return <div>
            <PageHeader />
            <FormControl handleKeyup={this.handleKeyup.bind(this)}/>
            <ResultPanel elems={elems}/>
        </div>
    }
}