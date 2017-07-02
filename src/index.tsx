import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'whatwg-fetch';

//import { Hello } from './components/Hello';
import App from './components/autocomplete/Autocomplete';


ReactDOM.render(
    //  <Hello compiler="TypeScript" framework="React" />, 
    <App />,
    document.getElementById("container")
);