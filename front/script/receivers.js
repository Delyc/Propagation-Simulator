async function getReceivers() {
    let data =""
    var receivers = document.getElementById("allreceivers");
    try {
      const res = await axios.get(`${apiUrl}api/receivers`);
      const locs = res.data.data;
      console.log(locs)
    //   return locs;
      locs.reverse()
      locs.forEach((value) => {
          data += `<div class="receiver>
          <table>
          <thead>

  <tr>

    <th>Radius</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Actions</th>
  </tr>
  </thead>
  <tbody>
  <tr>
 
    <td> ${value.radius}</td>
    <td> ${value.latitude}</td>
    <td> ${value.longitude}</td>
   
    
  </tr>
  </tbody>

</table>
        
          </div>`
      })
      receivers.innerHTML = data;
    } catch (error) {
      console.log(error);
      alert("The server did not return intended data");
      return [];
    }
  }


  getReceivers()