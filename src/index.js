import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import App from './App';
import createStore from "./store/store";
import 'semantic-ui-css/semantic.min.css'

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

