import React, { useRef, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // const [categories] = useState(allCategories);
  //Como después del render inicial categories nunca cambia -y por tanto nunca, lo pasé a una referencia
  // const categories = useRef(allCategories);
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  const [todos, setTodos] = useState({
    uno: "primer valor",
    dos: "segundo valor",
  });

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);

    setMenuItems(newItems);
  };
  const handleClick = () => {
    handleAdd("nuevo valor de uno");
  };
  const handleAdd = (todo) => {
    setTodos({ ...todos, [todo.uno]: todo });
  };
  return (
    <main>
      <section className="section menu">
        <div className="title">
          <h2 onClick={handleClick}>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
