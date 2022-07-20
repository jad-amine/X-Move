import React, { useContext } from "react";
import FieldForm from "../components/FieldForm";
import { UserContext } from "../contexts/UserContext";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  if (!user.info.property)
    return (
      <div>
        <FieldForm user={user} />
      </div>
    );
}
