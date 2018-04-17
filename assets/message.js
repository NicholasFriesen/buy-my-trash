function Message(message, time) {
    var msg = document.getElementById(message)
    // Add 'show' class
    msg.className = "show";

    // After 5 seconds, remove the 'show' class
    if (time == 'false') {
    }
    else {
      setTimeout(function(){ msg.className = msg.className.replace("show", ""); }, time);
    }
}
function CloseMessage(message) {
  	var msg = document.getElementById(message)
  	
    //remove 'show' class, add 'fade' class
 	msg.className = msg.classList.remove("show");
    msg.className = "fade";
  	console.log(msg.className);
}

