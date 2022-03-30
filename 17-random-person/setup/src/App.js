import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [infoOnDisplay, setInfoOnDisplay] = useState("name");
  const [info, setInfo] = useState("...");

  const handleMouseOver = ({ currentTarget }) => {
    const infoHovered = currentTarget.dataset.label;
    setInfoOnDisplay(infoHovered);
    setInfo(person[infoHovered]);
  };

  const fetchPerson = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();

      const {
        name: { first, last },
        dob: { age },
        email,
        location: { street },
        phone,
        picture: { large },
        login: { password },
      } = data.results[0];

      const randomPerson = {
        name: `${first} ${last}`,
        age,
        email,
        street: `${street.number} ${street.name}`,
        phone,
        image: large,
        password,
      };

      setPerson(randomPerson);
      setIsLoading(false);
      setInfoOnDisplay("name");
      setInfo(randomPerson.name);
      //
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random person"
            className="user-img"
          />
          <p className="user-title">My {infoOnDisplay} is</p>
          <p className="user-value">{info}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleMouseOver}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleMouseOver}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseOver={handleMouseOver}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleMouseOver}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleMouseOver}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleMouseOver}
            >
              <FaLock />
            </button>
          </div>
          <button
            className="btn"
            type="button"
            onClick={fetchPerson}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "New Person"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
