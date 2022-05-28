// Initialize and add the map

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
async function getReceivers() {
  try {
    const res = await axios.get(`/api/receivers`);
    const locs = res.data.data;
    return locs;
  } catch (error) {
    console.log(error);
    alert("The server did not return intended data");
    return [];
  }
}


async function initMap() {
  const uluru = { lat: -1.9844006566396841, lng: 30.232469556599987 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: uluru,
  });
  
  

  const locations = await getReceivers();
  console.log(locations);

  // The marker, positioned at Uluru
  locations.forEach((location, index) => {
    new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeWeight: 2,
      fillColor: "#" + randomColor(),
      fillOpacity: 0.55,
      map,
      center: {
        lat: location.location.coordinates[1],
        lng: location.location.coordinates[0],
      },
      radius: location.radius * 1000,
    });

    new google.maps.Marker({
      position: {
        lat: location.location.coordinates[1],
        lng: location.location.coordinates[0],
      },
      map,
    
    });
  });

  let windowInfo = new google.maps.InfoWindow({
    content: "Click to select a point",
    position: uluru,
  });
  windowInfo.open(map);

  map.addListener("click", (mapsMouseEvent) => {
    windowInfo.close();
    windowInfo = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    windowInfo.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );

    document.getElementById("latitude").value =
      mapsMouseEvent.latLng.toJSON().lat;
    document.getElementById("longitude").value =
      mapsMouseEvent.latLng.toJSON().lng;

    windowInfo.open(map);
  });
}


window.initMap = initMap;
