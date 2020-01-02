import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Ebooks from './routes/Ebooks';
import Infos from './routes/Infos';

ReactDOM.render(
<>
<BrowserRouter basename="/bdr">
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/ebooks" component={Ebooks} />
        <Route path="/infograficos" component={Infos} />
    </Switch>
</BrowserRouter>
</>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
