import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";

ReactDOM.render(
    <Router>
        <div>
             <App/>
        </div>
    </Router>, document.getElementById('root')
);

registerServiceWorker();
