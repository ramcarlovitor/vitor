function updateDateTime(){
  var now = new Date();
  
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();
  
  document.getElementById("datetime").innerHTML = date + ' ' + time;
}

updateDateTime();
setInterval(updateDateTime, 1000);