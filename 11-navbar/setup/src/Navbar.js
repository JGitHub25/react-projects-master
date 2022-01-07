import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                  {/*Luego se hará con React router. */}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialLink) => {
            const { id, url, icon } = socialLink;

            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
