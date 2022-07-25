// Grab HTML elements
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#log-in");
const error_message = document.querySelector("#error-message");

//Send data and store response (token and name) in localstorage
button.addEventListener("click", async () => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/admin/login/",
      {
        email: email.value,
        password: password.value,
      }
    );
    console.log(data);
    localStorage.setItem("name", data.user.name);
    localStorage.setItem("token", data.token);
    location.href = "./pages/welcome.html";
  } catch (error) {
    error_message.innerHTML = "Invalid Credentials";
    console.log(error.message);
  }
});
