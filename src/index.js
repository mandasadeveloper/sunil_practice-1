import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import "@shopify/polaris/dist/styles.css";
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>,
document.getElementById('root')
);