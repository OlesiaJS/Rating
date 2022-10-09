import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import users from "./data/BD.js";

let usersList = users.map((user) => {
  const container = {};
  container.name = user.name;
  container.img = user.img;
  container.homeworks = user.homeworks;
  container.sumHW = user.homeworks.reduce((p, c) => p + c, 0);
  return container;
});
usersList.sort((a, b) => parseFloat(b.sumHW) - parseFloat(a.sumHW));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App usersList={usersList} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
