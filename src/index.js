import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from "redux";
import reducers from "./reducers"
import logger from "redux-logger";
import thunk from "redux-thunk";


const store = createStore(reducers,applyMiddleware(logger,thunk))


ReactDOM.render(
<App store={store} />

, document.getElementById('root'));
registerServiceWorker();
