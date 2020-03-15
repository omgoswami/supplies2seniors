function myFunction() {
    var name = document.getElementById("name").value;
    document.getElementById("name").reset;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var method = document.getElementById("method").value;
    document.getElementById("info").innerHTML = "Your information has been recorded!";
 }