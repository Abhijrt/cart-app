import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDWJ1r6e7GNccl7ttCbRDd4cHB1gjSNi88",
  authDomain: "cart-app-react.firebaseapp.com",
  databaseURL: "https://cart-app-react.firebaseio.com",
  projectId: "cart-app-react",
  storageBucket: "cart-app-react.appspot.com",
  messagingSenderId: "178600182611",
  appId: "1:178600182611:web:5aab186f38913258f257a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
