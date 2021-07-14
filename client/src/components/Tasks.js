//import { useState, useEffect } from 'react';
import Task from './Task';

const Tasks = ({ tasks, deleteTask }) => {
    return (
        <ul>
            {tasks.map(task => {
                return (
                    <Task 
                        key={task._id} 
                        id={task._id}
                        title={task.title} 
                        done={task.done} 
                        deleteTask={deleteTask} 
                    />
                )
            })}
        </ul>
    )
};

export default Tasks;