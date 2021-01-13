import React from "react";
import "./TaskList.css";

const Task = (props) => {
  const style = {
    color: "red",
  };
  let finish;
  const { name, content, date, id, active, important, finishDate } = props.task;

  active ? (finish = null) : (finish = new Date(finishDate).toLocaleString());
  return (
    <div className="active__task">
      <header className="active__task__header" style={important ? style : null}>
        {name}
      </header>
      <p className="active__task__content">{content}</p>
      <div className="active__task__bottom">
        <span className="active__task__deadline">
          {active ? `deadline: ${date}` : `finished on: ${finish}`}
        </span>
        {active && (
          <button
            className="active__task--finsh"
            onClick={() => props.changeStatus(id)}
          >
            Finish
          </button>
        )}
        <button
          className="active__task--delete"
          onClick={() => props.delete(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;

// if (active) {
//   return (
//     <div className="active__task">
//       <header
//         className="active__task__header"
//         style={important ? style : null}
//       >
//         {name}
//       </header>
//       <p className="active__task__content">{content}</p>
//       <div className="active__task__bottom">
//         <span className="active__task__deadline">
//           {active ? `deadline: ${date}` : `finished on: ${finish}`}
//         </span>
//         {active && <button className="active__task--finsh">Finish</button>}
//         <button className="active__task--delete">X</button>
//       </div>
//     </div>
//   );
// } else {
//   return (
//     <div className="finished__task">
//       <p>
//         <strong>{name}</strong>
//         <em>(zrobić do {date})</em>
//         <br />- potwierdzenie wykonania <span> {finish}</span>
//         <button>X</button>
//       </p>
//     </div>
//   );
// }
