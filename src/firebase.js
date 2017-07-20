import * as firebase from 'firebase';

const config ={
    apiKey: "AIzaSyDvZb--iApprrp0lFfTl8nj8OAngwlCJlA",
    authDomain: "intelaapp.firebaseapp.com",
    databaseURL: "https://intelaapp.firebaseio.com",
    projectId: "intelaapp",
    storageBucket: "intelaapp.appspot.com",
    messagingSenderId: "9718228837"
};

export const firebaseApp = firebase.initializeApp(config);