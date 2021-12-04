import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [people, setPeople] = useState(data);

  //Event handlers.
  const deleteAll = () => {
    setPeople([]);
  };

  const deleteOne = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => {
        return person.id !== id;
      });
    });
  };

  //Create list.
  const peopleList = data.map((person) => {
    const { id, name, age, image } = person;
    return (
      <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name} </h4>
          <p>{age} years</p>
        </div>
        <button
          className="ind-button"
          onClick={() => {
            deleteOne(id);
          }}
        >
          Done!
        </button>
      </article>
    );
  });
  console.log(peopleList);

  //With vanilla JS.
  // const deleteOne = (e) => {
  //   e.target.parentElement.remove();
  //   const announcement = document.querySelector(".container h3");
  //   const stringNumb = announcement.textContent.charAt(0);
  //   if (stringNumb === "1") {
  //     document.querySelector(".container").lastChild.remove();
  //   }
  //   const numbBirth = +stringNumb - 1;
  //   announcement.textContent = announcement.textContent.replace(
  //     stringNumb,
  //     numbBirth.toString()
  //   );
  //   console.log(typeof numbBirth);
  //   console.log(numbBirth);
  // };

  // data.map((person) => {
  //   const { id, name, age, image } = person;
  //   return (
  //     <article key={id} className="person">
  //       <img src={image} alt={name} />
  //       <div>
  //         <h4>{name} </h4>
  //         <p>{age} years</p>
  //       </div>
  //       <button className="ind-button" onClick={deleteOne}>
  //         Done!
  //       </button>
  //     </article>
  //   );
  // });

  return (
    <>
      <section className="container">
        <h3>{data.length} birthdays today</h3>
        {peopleList}
        <button className="clear-all" onClick={deleteAll}>
          clear all
        </button>
      </section>
    </>
  );
};

export default List;
