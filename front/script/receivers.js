async function deleteReceiver(id) {
  const del = window.confirm("Are you sure? This will be deleted.");
  if (del) {
    try {
      const res = await axios.delete(`${apiUrl}api/receivers/` + id);
    } catch (error) {
      console.log(error);
    }
  } else {
    swal("Hello world!", {
        buttons: false,
      });
  }
}

document.querySelector("body").addEventListener("click", async (e) => {
  const { target } = e;
  if (target.matches(".delete")) {
    const id = target.getAttribute("data-id");
    console.log(id);
    await deleteReceiver(id);
    target.parentNode.parentNode.style.display = "none";
  }
});

async function getReceivers() {
  let data = "";
  var receivers = document.getElementById("allreceivers");
  try {
    const res = await axios.get(`${apiUrl}api/receivers`);
    const locs = res.data.data;
    console.log(locs);
    //   return locs;
    locs.reverse();
    locs.forEach((value) => {
      data += `

  <tr>
 
    <td> ${value.radius}</td>
    <td> ${value.location.coordinates[1]}</td>
    <td> ${value.location.coordinates[0]}</td>
    <td><button class="delete" data-id="${value._id}"><img src="../assets/delete.png" alt=""></button><td>

   
    
  </tr>

 
  
        
          `;
    });
    receivers.innerHTML = data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
     
    })
    return [];
  }
}

document.querySelector("body").addEventListener("click", async (e) => {
  const { target } = e;
  if (target.matches(".delete")) {
    const id = target.getAttribute("data-id");
    console.log(id);
    await deleteReceiver(id);
    target.parentNode.parentNode.style.display = "none";
  }
});

async function getReceiversMobile() {
  let data = "";
  var receivers = document.getElementById("allreceiversMobile");
  try {
    const res = await axios.get(`${apiUrl}api/receivers`);
    const locs = res.data.data;
    console.log(locs);
    //   return locs;
    locs.reverse();
    locs.forEach((value) => {
      data += `

  <div class="mobo">
  
    <div class="data"> <h3 class="head"><img src="../assets/radius.png" alt="">RADIUS</h3> <span class="span-data"> This receiver has  a Radius of  <strong>${value.radius}</strong>km </span></div>
    <div class="data"><h3 class="head"><img src="../assets/lat.png" alt="">LATITUDE: </h3><span  class="span-data">${value.location.coordinates[1]} </span></div>
    <div class="data"><h3 class="head"><img src="../assets/long.png" alt="">LONGITUDE: </h3><span  class="span-data"> ${value.location.coordinates[0]}</span></div>
    
    <button class="delete" data-id="${value._id}">Delete</button>

   
    
  </div>

 
  
        
          `;
    });
    receivers.innerHTML = data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
     
    })
    return [];
  }
}


getReceivers();
getReceiversMobile()
