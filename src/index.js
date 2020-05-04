import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import Store from "./store";
import "./index.css";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
serviceWorker.unregister();