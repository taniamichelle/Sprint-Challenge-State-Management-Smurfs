import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import 'semantic-ui-css/semantic.min.css';
import App from "./components/App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
