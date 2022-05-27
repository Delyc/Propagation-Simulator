
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
    alert("New point added");
  } catch (error) {
    console.log(error);
  }
});


