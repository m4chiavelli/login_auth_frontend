import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome to your dashboard{" "}
        <span style={{ fontWeight: "bold" }}>{user && user.name}</span>
      </h2>
    </div>
  );
};

export default Welcome;
