import React, { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
  let minDate = new Date().toISOString().slice(0, 10);
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(minDate);
  const [content, setContent] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleButtonClick = () => {
    const add = props.addTask(name, content, checked, date);
    if (add) {
      setName("");
      setContent("");
      setChecked(false);
      setDate(minDate);
    } else {
      console.log("Błąd przy dodawaniu zadania");
    }
  };

  return (
    <>
      <header className="tasks__add__header">
        <span>Add new task</span>
      </header>
      <input
        className="tasks__add__input"
        type="text"
        placeholder="Name"
        spellCheck={false}
        onChange={handleNameChange}
        value={name}
      />
      <div className="date__container">
        <input
          className="tasks__add__date"
          type="date"
          value={date}
          min={minDate}
          onChange={handleDateChange}
        ></input>
      </div>
      <textarea
        className="tasks__add__text"
        type="text"
        placeholder="What would you like to do?"
        onChange={handleContentChange}
        value={content}
      ></textarea>
      <div className="important">
        <input
          type="checkbox"
          className="tasks__add__important"
          checked={checked}
          onChange={handleCheck}
        />
        <label className="important_label">Priority</label>
      </div>
      <button className="tasks__add--submit" onClick={handleButtonClick}>
        {" "}
        Add Task
      </button>
    </>
  );
};

export default AddTask;
