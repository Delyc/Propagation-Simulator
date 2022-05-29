function validateLatLng(point) {    
  let pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');
  
  return pattern.test(point);
}



function validate(form) {
  let listErr = []

  let longitude = form.longitude.value;
  let latitude =form.latitude.value;
  let radius = form.radius.value;
 


  
  if (!validateLatLng(latitude)) {
    listErr.push({field: "latitude", message: "Invalid latitude or latitude out of range"})
  } 
  if (!validateLatLng(longitude)) {
    listErr.push({field: "longitude", message: "Invalid longitude or longitude out of range"})
  } 
  
 if (isNaN(radius) || radius < 4 || radius > 10) {
    
    listErr.push({field: "radius", message: "Invalid radius or out of range"})
  } 

  return listErr

}


