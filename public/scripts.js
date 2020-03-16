
function testLogin() {
    //TEST USER SIGNED-IN?
    var user = firebase.auth().currentUser;

    if (user) {
        location.replace("loggedin.html");
        window.alert(user.email);
    } else {
        location.replace("login.html")
        // No user is signed in.
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
}

//Create Account Function
function create() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("FAILED: " + errorMessage);

        // ...
    });
    window.alert("CREATED.");
}

//Logout Function
function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
             // Handle Errors here.
             var errorCode = error.code;
             var errorMessage = error.message;
             window.alert("FAILED: " + errorMessage);
      });
}
