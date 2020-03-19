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

//Geolocation API
/*$.getJson("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDgGmrdfq0CdLbPOQv5eDttby6uQCPeswo", function(data)) {
  console.log(data)}; */
