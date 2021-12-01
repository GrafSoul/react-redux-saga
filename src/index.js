import React from 'react';
import { render } from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './store/reducers/reducers';
import { forbiddenWordsMiddleware } from './store/middleware/middleware';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { sagaWather } from './store/saga/sagas';

const saga = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

saga.run(sagaWather);

render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
