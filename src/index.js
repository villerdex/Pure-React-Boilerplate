
import React, { Fragment } from "react";
import { useState, useEffect, useMemo,} from 'react';
import { BrowserRouter as Router, Route, browserHistory, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers/index_reducer'
import { sagas } from './sagas/index_saga'
import ReactDOM from "react-dom";
import "./app.less";

import Home from './views/home'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

const App = () => {

    return (
            <Home/>

    );
};

if (typeof window !== 'undefined') {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </Router>
        </Provider>,
        document.getElementById("root")
    );
}
