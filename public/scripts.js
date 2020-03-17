function testLogin() {

    //TEST USER SIGNED-IN?
    var user = firebase.auth().currentUser;

    if (user) {
        location.replace("logged_in.html");
    }
}
//Login Function
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("FAILED: " + errorMessage);

        // ...
    });

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
        // Existing and future Auth states are now persisted forever.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    
    testLogin();

}

//Create Account Function
function create() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1 != password2) {
        windows.alert("PASSWORDS DO NOT MATCH.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password1).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("FAILED: " + errorMessage);

        // ...
    });

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
    // Existing and future Auth states are now persisted forever.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    window.alert("CREATED: Please wait for admin approval.");
    testLogin();
}

//Logout Function
function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("FAILED: " + errorMessage);
    });

    testLogin();
}
