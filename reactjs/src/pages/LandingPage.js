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
      }, 2500);
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
          setTimeout(() => {
            setIsLoading(false);
          }, 2500);
          console.log(error.message, error);
        }
      };
      authOwner();
    }
  }, []);
  if (isLoading) {
    return (
      <div className="loading-screen">
        <Loading />
      </div>
      // <ReactLoading type="bubbles" color="tomato" height={400} width={100} />
    );
  }
  return (
    <>
      <div className=" landing-page">
        <div>
          <p className="slogan">We are not alone !!</p>
          <p className="slogan-text">The most engaged sports community !</p>
        </div>
        <UserForm />
      </div>
    </>
  );
}

export default LandingPage;
