import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import App from './containers/App';
import 'semantic-ui-css/semantic.min.css'
import createStore from "./store/store";
import './index.scss';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

