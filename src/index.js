import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const users = [
  {
    name: 'Марина Лихолетова',
    img: 'https://lms.ithillel.ua/uploads/images/2519ab52ca03245272dbdc09df2b8393.jpg?width=400&height=400',
    homeworks: [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
  },
  {
    name: 'Yuilia Zabuha',
    img: 'https://lms.ithillel.ua/assets/images/userpic.jpg',
    homeworks: [
      57, 80, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
  },
  {
    name: 'Denis Kyslytsia',
    img: 'https://lms.ithillel.ua/uploads/images/1b94cd2c8d068cebb1049c4c604f3ec0.jpg?width=100&height=100',
    homeworks: [
      57, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
  },
  {
    name: 'Olesia Vashchenko',
    img: 'https://lms.ithillel.ua/uploads/images/9635ebfb0d299223a7ea53144177ad33.jpg?width=100&height=100',
    homeworks: [
      88, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
  },
  {
    name: 'Микола Трафіменков',
    img: 'https://lms.ithillel.ua/assets/images/userpic.jpg',
    homeworks: [
      96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
  },
  {
    name: 'Elena Voloshyna',
    img: 'https://lms.ithillel.ua/uploads/images/55abf3e83c16808834dacda675354944.jpg?width=100&height=100',
    homeworks: [
      90, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
  },
  {
    name: 'Олександр Aсаулов',
    img: '	https://lms.ithillel.ua/uploads/images/307b36412d16b4b1e87f4b3d914ab360.jpg?width=100&height=100',
    homeworks: [
      89, 90, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
  },
  {
    name: 'Павло Черняков',
    img: 'https://lms.ithillel.ua/uploads/images/2dba89e3a2dc15a5352922664836f0bc.jpg?width=400&height=400',
    homeworks: [
      91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
  }

];

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
