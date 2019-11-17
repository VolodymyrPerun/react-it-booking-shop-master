import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import rootReducers from '../reducers'

export default () => {
    return createStore(rootReducers, applyMiddleware(logger));
};


