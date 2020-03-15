
//TEST USER SIGNED-IN?
var user = firebase.auth().currentUser;

if (user) {
    window.alert("Signed in.");
} else {
    // No user is signed in.
}
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


function create() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    location.replace("home.html");
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("FAILED: " + errorMessage);

        // ...
    });

    window.alert("CREATED.");
}
