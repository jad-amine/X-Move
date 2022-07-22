import React, { useContext } from "react";
import FieldForm from "../components/FieldForm";
import { UserContext } from "../contexts/UserContext";
import OwnerCalendar from "./OwnerCalendar";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  if (!user.info.property)
    return (
      <div>
        <FieldForm user={user} setUser={setUser} />
      </div>
    );

  return (
    <div>
      <p className="calendar-header">Welcome Back {user.info.name}</p>
      <OwnerCalendar />
    </div>
  );
}
