import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDxUtGj5cEo873y0oubgBdWdt55ZZdIz4w",
    authDomain: "amaxon-65b38.firebaseapp.com",
    databaseURL: "https://amaxon-65b38.firebaseio.com",
    projectId: "amaxon-65b38",
    storageBucket: "amaxon-65b38.appspot.com",
    messagingSenderId: "28719165333",
    appId: "1:28719165333:web:d3e977231de6c112b5109c",
    measurementId: "G-Q6G3QME3H7"
  };

  const client = require("firebase-tools");
    client.projects
      .list()
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        // handle error
  });

  // initalize you firebase app for backend connection
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // initalize the db connection
  const db = firebaseApp.firestore();
  // initialize bd authentication 
  const auth = firebase.auth();

  export { db, auth };