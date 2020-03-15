
//TEST USER SIGNED-IN?
var user = firebase.auth().currentUser;

if (user) {
    // User is signed in.
} else {
    // No user is signed in.
}
function login() {
    var email = document.getElementByName("email").value;
    var password = document.getElementByName("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("FAILED: " + errorMessage);

        // ...
    });
}

function create() {
    var email = document.getElementByName("email").value;
    var password = document.getElementByName("password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("FAILED: " + errorMessage);

        // ...
    });
    window.alert("CREATED.");
}