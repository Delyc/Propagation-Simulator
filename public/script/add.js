document.getElementById("send").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const errors = validate(e.target);
  console.log(errors);
  if (errors.length > 0) {
    errors.forEach((err) => {
      document.getElementById(err.field + "ErrorMessage").innerHTML =
        err.message;
    });
    return;
  }
  const object = {};
 
  formData.forEach((value, key) => {
    if (value !== e.target[key].defaultValue) {
      object[key] = value;
    }
  });

  try {
    const res = await axios.post(`${apiUrl}api/receivers`, object, {
      headers: { "Content-Type": "application/json" },
    });
  
    
    Swal.fire({
      text: "Receiver added successfully",
      icon: 'success',
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then(() => {
      location.reload();
    });
 
  } catch (error) {
    console.log(error);
  }
});
