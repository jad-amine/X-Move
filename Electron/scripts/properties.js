const list = document.querySelector("#list");

// Get properties from the server
const getProperties = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:4000/api/admin/getProperties",
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(data);
    if (data) {
      data.forEach((property) => {
        let div = document.createElement("div");
        div.classList.add("property-card");
        div.innerHTML = `
        <div><h1>${property.name}</h1> 
          <h3>Owner: ${property.owner.name}</h3>
          <h3>Number: ${property.number}</h3>
          <h3>Email: ${property.email}</h3>
          <h3>Rent per hour: ${property.rentPerHour}</h3>
          <h3>Sport: ${property.sport}</h3>
        </div>
        <img class="property-img" src="http://localhost:4000/Images/PropertyImages/${property.name}.png" alt="No Picture">`;
        list.appendChild(div);
      });
    }
  } catch (error) {
    console.log(error, error.message);
  }
};

getProperties();
