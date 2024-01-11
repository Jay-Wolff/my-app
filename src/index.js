/* the root = the reason it appears on the screen */

import React from 'react'; /* react library */
import ReactDOM from 'react-dom/client';
import './index.css'; /* stylesheet we write/customize */
import App from './App';
import reportWebVitals from './reportWebVitals'; /* testing framework mini library inside app to measure performance and test cases*/
import 'bootstrap/dist/css/bootstrap.min.css'; /* this extra baebee need for react-bootstrap*/


/* this render the app.js file so your app.js component can be used above in imports for other classes */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
