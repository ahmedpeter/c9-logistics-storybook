import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './src/fonts/fontello/css/cloud9.css';
import './src/fonts/fonts/fonts.css';
import { Layout } from './Layout';
import { Theme } from './Theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Layout>
            <App />
            </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
