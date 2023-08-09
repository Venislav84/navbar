import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* Това е Layout в който сме nested About, Dashboard, NoMatch */}
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* това ще върне Id,след наклонената черта */}
            <Link to="/dashboard/:${id}">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {/*Този Outlet ни позволява да хванем пътя от App.js, като деца */}
      <Outlet />
    </div>
  );
};

export default Layout;
