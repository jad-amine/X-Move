// Utilities
import API from "../api";
import { UserContext } from "../contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";

// Components
import Loading from "../components/Loading";
import UserForm from "../components/UserForm";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    // Check if the owner hasn't logged out from the last session
    const token = localStorage.getItem("token");
    if (!token) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
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
