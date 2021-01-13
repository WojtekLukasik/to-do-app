import Task from "./Task.js";
import "./TaskList.css";

const TaskList = (props) => {
  const { active } = props;
  const tasks = props.tasks.filter((task) => task.active === active);
  const taskList = tasks.map((task) => (
    <li key={task.id}>
      <Task
        key={task.id}
        task={task}
        changeStatus={props.changeStatus}
        delete={props.delete}
      />
    </li>
  ));

  return (
    <>
      <header className="task__list__header">
        <span>{active ? "Tasks to do:" : "Finished tasks"}</span>
      </header>

      {/* <ul className={active ? "active__list" : "finished__list"}>{taskList}</ul> */}
      <ul className="active__list">{taskList}</ul>
    </>
  );
};

export default TaskList;
