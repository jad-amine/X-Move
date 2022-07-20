import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import ReactLoading from "react-loading";
import Loading from "../components/Loading";
import API from "../api";
import Navbar from "../components/Navbar";

function LandingPage({ setUser }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      const authOwner = async () => {
        try {
          const { data } = await API.post(
            "authOwner/",
            { mission: "Auth User" },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (data.status === "Verified") {
            setUser({ info: data.user, token: token });
          }
        } catch (error) {
          setUser(null);
          setIsLoading(false);
          console.log(error.message, error);
        }
      };
      authOwner();
    }
  }, []);
  if (isLoading) {
    return (
      <Loading />
      // <ReactLoading type="bubbles" color="tomato" height={400} width={100} />
    );
  }
  return (
    <>
      <Navbar />
      <div className="container landing-page">
        <div>we are not alone !!</div>
        <UserForm />
      </div>
    </>
  );
}

export default LandingPage;
