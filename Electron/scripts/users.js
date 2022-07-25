const users_div = document.querySelector("#users-container");
const users = document.querySelector("#users");
const owners = document.querySelector("#owners");

// Fetch users data
const fetchUsers = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:4000/api/admin/getUsers",
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    data.forEach((user) => {
      let div = document.createElement("div");
      div.classList.add("user-card");
      if (user.admin == 0) {
        div.innerHTML = `
        <img class="user-img" src="http://localhost:4000/Images/ProfilePictures/${user.email}.png" alt="No Picture">
        <div>
          <h3>${user.name}</h3>
          <p>${user.email}</p>
          <p>${user.about}</p>
        </div>`;
        users.appendChild(div);
      } else if (user.admin == 2) {
        div.innerHTML = `          <h3>${user.name}</h3>
        <p>${user.email}</p>`;
        owners.appendChild(div);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();
