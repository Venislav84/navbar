import React from "react";
import { useParams, useLocation } from "react-router-dom";
// useParams, взима параметъра от Dashboard
// useLocation, връща локацията

const Dashboard = () => {
  const param = useParams();
  let location = useLocation();
  console.log(param);
  console.log(location);
  return <div>Dashboard</div>;
};

export default Dashboard;
