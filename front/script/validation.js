
function myFunction() {
  // Get the value of the input field with id="numb"
  let longitude = document.getElementById("longitude").value;
  let latitude = document.getElementById("latitude").value;
  let radius = document.getElementById("rad").value;
  // If x is Not a Number or less than one or greater than 10
  let lang_msg;
  let lat_msg;
  let rad_msg;
  // if () {
  //   lang_msg = "Input not valid";
  // } else {
  //   text = "Input OK";
  // }
  if (latitude=="" || radius=="" || longitude=="") {
    lat_msg = "Input not val";
  } else {
    text = "Input OK";
  }
  // if () {
  //   rad_msg = "Input not val";
  // } else {
  //   text = "Input OK";
  // }
  // document.getElementById("long").innerHTML = lang_msg;
  document.getElementById("lat").innerHTML = lat_msg;
  // document.getElementById("radi").innerHTML = rad_msg;
}