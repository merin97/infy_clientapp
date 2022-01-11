import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate(); //like usehistory
  const handleClick = () => {
    navigate("/clients");
  };
  return (
    <div>
      <h2>DX Client Management</h2>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
