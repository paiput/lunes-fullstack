import { useState, useEffect } from 'react';
import Form from './components/Form';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
      const someTasks = [
          {
              _id: 1,
              title: 'Sacar al perro',
              done: false
          },
          {
              _id: 2,
              title: 'Jugar a la play',
              done: true
          },
          {
              _id: 3,
              title: 'Aprender React',
              done: false
          }
      ]

      setTasks(someTasks);
  }, []);

  // helpers
  const addTask = (newTask) => {
    setTasks(prevTasks => prevTasks.concat(newTask))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task._id !== id));
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <Form addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
