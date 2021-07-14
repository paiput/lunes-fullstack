//import { useState, useEffect } from 'react';
import Task from './Task';

const Tasks = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(task => {
                return (
                    <Task key={task._id} title={task.title} done={task.done} />
                )
            })}
        </ul>
    )
};

export default Tasks;