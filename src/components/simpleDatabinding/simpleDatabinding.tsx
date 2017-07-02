import * as React from 'react';
import { Subject, Observable, BehaviorSubject } from 'rxjs/rx';


const PageHeader = () => <div className="page-header">
    <h1>간단한 데이터 바인딩 예제</h1>
    <p className="lead">RxJS를 통한 데이터 바인딩에 대해 이해해보자</p>
</div>


interface FormProps {
    firstName: string;
    lastName: string;
}
interface FormState {
    fullName: string;
}
interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}
export default class Form extends React.Component<FormProps, FormState> {

    private firstName: BehaviorSubject<string> = new BehaviorSubject('');
    private secondName: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() {
        super();
        this.state = {
            fullName: ''
        }
    }

    componentDidMount() {
        this.firstName.combineLatest(this.secondName, (first, second) => first + ' ' + second)
            .subscribe(function (fullName: string) {
                this.setState({
                    fullName
                });
            }.bind(this))
    }

    handleFirstNameKeyUp (e: HTMLInputEvent) {
        this.firstName.next(e.target.value);
    }

    handleSecondNameKeyUp (e: HTMLInputEvent) {
        this.secondName.next(e.target.value);
    }
    
    render (): JSX.Element | null | false {
        return <div>
            <PageHeader />
            <div className="row-fluid">
                <form>
                    <fieldset>
                        <legend>그냥 단순한 데이터 바인딩이다.</legend>
                        <input type="text" placeholder="FirstName" onKeyUp={this.handleFirstNameKeyUp.bind(this)}/>
                        <input type="text" placeholder="secondName" onKeyUp={this.handleSecondNameKeyUp.bind(this)}/>
                        <input type="text" readOnly value={this.state.fullName}/>
                    </fieldset>
                </form>
            </div>
        </div>
    }
}
