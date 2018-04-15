import firebase from 'firebase';
require('firebase/firestore');

var config = {
  apiKey: 'AIzaSyCMKTHb90V6HT_ztVJe3ijRCTk0JA9gm9k',
  authDomain: 'localf-6ed09.firebaseapp.com',
  databaseURL: 'https://localf-6ed09.firebaseio.com',
  projectId: 'localf-6ed09',
  storageBucket: 'localf-6ed09.appspot.com',
  messagingSenderId: '925256549740'
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const messaging = firebase.messaging();
