// Grab HTML elements
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#log-in");
const error_message = document.querySelector("#error-message");

// Authenticate the admin when the application launch
const authAdmin = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/admin/authAdmin",
      { mission: "auth" },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    if (data === "Validated") location.href = "./pages/Welcome.html";
  } catch (error) {
    console.log(error);
  }
};

authAdmin();

// Login Request
button.addEventListener("click", async () => {
  try {
    const { data } = await axios.post("http://localhost:4000/api/admin/login", {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("name", data.user.name);
    localStorage.setItem("token", data.token);
    location.href = "./pages/Welcome.html";
  } catch (error) {
    error_message.innerHTML = "Invalid Credentials";
    console.log(error.message);
  }
});
