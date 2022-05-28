
document.getElementById("send").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = {};
    // eslint-disable-next-line no-return-assign
    formData.forEach((value, key) => {
      if (value !== e.target[key].defaultValue) {
        object[key] = value;
      }
    });
  console.log(object)
  try {
    const res = await axios.post(`${apiUrl}api/receivers`, object, {headers: {"Content-Type":"application/json"}});
    // swal({  
    //   title: " Success",  
    //   text: " A receie",  
    //   icon: "error",  
    //   button: "oh no!",  
    // });  
    Swal.fire({
      text: "Not sure about coordinates values? we got you covered! Click on map any area you want, the coordinates values  will be inserted in the formbelow for you. Go ahead and put radius value, make sure radius value is from 4 to 10 and hit submit button. Your receiver will be added on the map",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    // .swal-button {
    //   padding: 7px 19px;
    //   border-radius: 2px;
    //   background-color: #4962B3;
    //   font-size: 12px;
    //   border: 1px solid #3e549a;
    //   text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
    // }
  } catch (error) {
    console.log(error);
  }
});


