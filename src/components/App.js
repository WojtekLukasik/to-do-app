import React, { useState } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
const sampleTasks = [
  {
    id: 0,
    name: "Posprzątać kuchnię",
    content: "Zrobić to zanim przyjedzie Sara bo będzie przyps",
    date: "2021-02-12",
    important: false,
    active: true,
    finishDate: null,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(sampleTasks);

  const handleChangeTaskStatus = (id) => {
    const taskList = [...tasks];
    taskList.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    setTasks(taskList);
  };

  const handleDeleteTask = (id) => {
    let taskList = [...tasks];
    taskList = taskList.filter((task) => task.id !== id);
    setTasks(taskList);
  };

  const addTask = (name, content, checked, date) => {
    console.log(name, content, checked, date);
    let taskList = [...tasks];
    let id;
    taskList.length > 0
      ? (id = taskList[taskList.length - 1].id + 1)
      : (id = 0);
    if (name.length > 0) {
      const newTask = {
        id: id,
        name: name,
        content: content,
        date: date,
        important: checked,
        active: true,
        finishDate: null,
      };
      setTasks([...taskList, newTask]);
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <span>do</span>
        </header>
        <div className="tasks">
          <div className="tasks__child tasks__add">
            <AddTask addTask={addTask} />
          </div>
          <div className="tasks__child tasks__active">
            <TaskList
              active={true}
              tasks={tasks}
              changeStatus={handleChangeTaskStatus}
              delete={handleDeleteTask}
            />
          </div>
          <div className="tasks__child tasks__finished">
            <TaskList active={false} tasks={tasks} delete={handleDeleteTask} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

// const tasks = [
//   {
//     id: 0,
//     name: "Lorem ipsum dolor sit amet",
//     content:
//       " Quisque tempus accumsan lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
//     date: "2018-02-15",
//     important: true,
//     active: true,
//     finishDate: null,
//   },
//   {
//     id: 1,
//     name: "In sit amet rutrum leo",
//     content: "Donec accumsan eleifend felis, non luctus turpis porta eget.",
//     date: "2020-01-01",
//     important: false,
//     active: true,
//     finishDate: null,
//   },
//   {
//     id: 2,
//     name: "Quisque mi eros",
//     content:
//       " Aenean quis eros tincidunt, euismod orci id, feugiat massa. Suspendisse potenti. Aenean sed venenatis enim.",
//     date: "2020-01-01",
//     important: false,
//     active: true,
//     finishDate: null,
//   },
//   {
//     id: 3,
//     name: "Nullam sollicitudin nibh",
//     content:
//       "Donec maximus tortor purus, tincidunt maximus dolor aliquam in. Donec commodo velit eros, a rhoncus sem aliquet eget.",
//     date: "2020-01-01",
//     important: false,
//     active: false,
//     finishDate: null,
//   },
//   {
//     id: 4,
//     name: "Morbi nunc velit",
//     content:
//       "Aenean ac lectus eu quam luctus finibus in sed nunc. Vivamus a diam varius erat vestibulum malesuada ut non ipsum.",
//     date: "2020-01-01",
//     important: false,
//     active: false,
//     finishDate: null,
//   },
//   {
//     id: 5,
//     name: "Interdum et malesuada",
//     content:
//       "Maecenas luctus varius pulvinar. Aliquam fermentum, massa a dictum pulvinar, dui turpis pretium massa, vel semper nibh lectus non libero.",
//     date: "2020-01-01",
//     important: false,
//     active: false,
//     finishDate: null,
//   },
// ];
