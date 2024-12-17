import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaBoltLightning, FaReact, FaXmark } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import "../styles/navbar.css";
import "../styles/sidebar.css"
import { SidebarList } from "./SidebarList";

const data = [
  { icon: <FaHome />, label: 'Home', path: '/' },
  { icon: <FaBoltLightning />, label: 'Projectos', path: '/projects' },
  { icon: <FaReact />, label: 'Experiencia', path: '/experience' },
];

export const Navbar = () => {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('.sidebar').classList.remove('active');
  }, [location]);

  const handleOnSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('active')
  }

  const handleOffSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('active')
  }

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <div className="brand">
          <h1>Brand</h1>
        </div>
        <div className="toggleButton">
          <button onClick={() => handleOnSidebar()} >
            <FaBars />
          </button>
        </div>
        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="/projects"> Proyectos </Link>
          <Link to="/experience"> Experiencia </Link>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          Logo
        </div>
        <button id='btnoff' onClick={() => handleOffSidebar()}>
          <FaXmark />
        </button>
      </div>

      <SidebarList items={data} />
      </div>
    </div>
  );
}