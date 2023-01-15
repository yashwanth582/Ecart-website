import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase'
import firebase from 'firebase/compat/app'
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtx70QMagD37NcXQzyHesj--I3fFcjpwI",
  authDomain: "cart-b597c.firebaseapp.com",
  projectId: "cart-b597c",
  storageBucket: "cart-b597c.appspot.com",
  messagingSenderId: "590366487261",
  appId: "1:590366487261:web:03673bfa9676dd08076134"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// export db
export {db};

reportWebVitals();
 