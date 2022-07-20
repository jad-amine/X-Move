import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import ReactLoading from "react-loading";
import Loading from "../components/Loading";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
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
