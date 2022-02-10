import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    e.stopPropagation();
    const pageName = e.target.dataset.page;
    const positionInfo = e.target.getBoundingClientRect();
    const center = (positionInfo.left + positionInfo.right) / 2;
    const bottom = positionInfo.bottom - 3;
    openSubmenu(pageName, { center, bottom });
  };
  //Esto es una variación de lo que John hace. Al fin lo dejé con una propuesta de un comentario: más elegante.
  // const handleSubmenuClose = (e) => {
  //   const hoveredElem = e.target;
  //   !hoveredElem.classList.contains("link-btn") && closeSubmenu();
  // };

  return (
    <nav className="nav" onMouseOver={closeSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <li key={index}>
                <button
                  data-page={page}
                  className="link-btn"
                  onMouseOver={displaySubmenu}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn sigin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
