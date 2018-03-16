function myFunction() {
    var message = document.getElementById("tut__message")
    // Add 'show' class
    message.className = "show";

    // After 5 seconds, remove the 'show' class
    setTimeout(function(){ message.className = message.className.replace("show", ""); }, 5000);
}
