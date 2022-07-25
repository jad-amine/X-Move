import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import Loading from "../components/Loading";
import API from "../api";

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
    return <Loading />;
  }

  return (
    <div className=" landing-page">
      <div>
        <p className="slogan">We are not alone !!</p>
        <p className="slogan-text">The most engaged sports community !</p>
      </div>
      <UserForm />
    </div>
  );
}

export default LandingPage;
