import React from "react";

const List = (props) => {
  const { people } = props;
  // const peopleList = people.map((person) => {
  //   const { id, name, age, image } = person;
  //   return (
  //     <article key={id} className="person">
  //       <img src={image} alt={name} />
  //       <div>
  //         <h4>{name} </h4>
  //         <p>{age} years</p>
  //       </div>
  //     </article>
  //   );
  // });
  // console.log(peopleList);
  const deleteOne = (e) => {
    e.target.parentElement.remove();
    const announcement = document.querySelector(".container h3");
    const stringNumb = announcement.textContent.charAt(0);
    if (stringNumb === "1") {
      document.querySelector(".container").lastChild.remove();
    }
    const numbBirth = +stringNumb - 1;
    announcement.textContent = announcement.textContent.replace(
      stringNumb,
      numbBirth.toString()
    );
    console.log(typeof numbBirth);
    console.log(numbBirth);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name} </h4>
              <p>{age} years</p>
            </div>
            <button className="ind-button" onClick={deleteOne}>
              Done!
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
