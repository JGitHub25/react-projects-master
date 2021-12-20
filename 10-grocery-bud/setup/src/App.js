import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function getListFromStorage() {
  const list = JSON.parse(localStorage.getItem("Grocery list"));

  return list || [];
}

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getListFromStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    localStorage.setItem("Grocery list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //Alert error.
      updateAlertValues(true, "Please enter an item", "danger");
    } else if (name && isEditing) {
      //Complete edit.

      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      updateAlertValues(true, "Item updated", "success");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      updateAlertValues(true, "Item added", "success");
      setName("");
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const updateAlertValues = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearItems = () => {
    updateAlertValues(true, "All items removed", "danger");
    setList([]);
  };

  const editThisItem = (id) => {
    const thisItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(thisItem.title);
  };

  const deleteThisItem = (id) => {
    updateAlertValues(true, "Item removed", "danger");

    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} updateAlertValues={updateAlertValues} list={list} />
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. broccoli"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            items={list}
            deleteThisItem={deleteThisItem}
            editThisItem={editThisItem}
          />
          <button className="clear-btn" onClick={clearItems}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
