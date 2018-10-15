import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDPWfPouD1_xR6OpoNQS1tuCB2H6hVY50M",
    authDomain: "todo-oct12-2018.firebaseapp.com",
    databaseURL: "https://todo-oct12-2018.firebaseio.com",
    projectId: "todo-oct12-2018",
    storageBucket: "todo-oct12-2018.appspot.com",
    messagingSenderId: "1054863538588"
};
firebase.initializeApp(config);

export default firebase;