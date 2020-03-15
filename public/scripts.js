var firebase = require("firebase/app");
require("firebase/auth");

var firebaseConfig = {
    apiKey: "AIzaSyAo-Dxsng50G-H71fn6umwIieUZkG87_M0",
    authDomain: "supplies2seniors-26e2f.firebaseapp.com",
    databaseURL: "https://supplies2seniors-26e2f.firebaseio.com",
    projectId: "supplies2seniors-26e2f",
    storageBucket: "supplies2seniors-26e2f.appspot.com",
    messagingSenderId: "1074662729499",
    appId: "1:1074662729499:web:b6c7226d42202777a355be",
    measurementId: "G-3H6ZNG3VB5"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        //Transfer to next HTML webpage
    } else {
        // No user is signed in.
    }
});

function create() {
    window.alert("Creating acc!");
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        window.alert("inside");
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error: " + errorMessage);
        // ...
      });      
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    window.alert("Inside login");
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        window.alert("Inside sign-in");
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
        // ...
    });
    window.alert("Outside sign-in");
}

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });      
}