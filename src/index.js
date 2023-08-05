import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import FunctionalComponent from './component/FunctionalComponent';
// import ClassComponent from './component/ClassComponent';
// import Parent from './props/functional/Parent';
import ParentClass from './props/class/ParentClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FunctionalComponent /> */}
    {/* <ClassComponent/> */}
    {/* <Parent/>   //functional component props */}
    <ParentClass/>           class component props
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
