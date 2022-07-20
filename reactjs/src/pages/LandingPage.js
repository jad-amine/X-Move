import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import ReactLoading from "react-loading";
import Loading from "../components/Loading";
import API from "../api";

function LandingPage({ setUser }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
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
            setUser(data.user);
          }
        } catch (error) {
          setIsLoading(false);
          console.log(error.message, error);
        }
      };
      authOwner();
    }
  }, []);
  if (isLoading) {
    return (
      // <Loading />
      <ReactLoading type="bubbles" color="tomato" height={400} width={100} />
    );
  }
  return (
    <div className="container landing-page">
      <div>we are not alone !!</div>
      <Form />
    </div>
  );
}

export default LandingPage;
