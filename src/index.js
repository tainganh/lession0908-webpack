import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, applyMiddleware } from "redux";
import myReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import createSagaMiddleware from "redux-saga";
// import mySaga from "./saga/sagas";
import { loadProgressBar } from 'axios-progress-bar';

// create the saga middleware

// const sagaMiddleware = createSagaMiddleware();
loadProgressBar();
const store = createStore(
    myReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
// sagaMiddleware.run(mySaga);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
