import { useState } from 'react';

const Form = ({ setTasks }) => {
    const [newTitle, setNewTitle] = useState('');

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title: newTitle,
            done: false,
            _id: Math.random() * 1000
        }
        setTasks(prevTasks => prevTasks.concat(newTask));
        setNewTitle('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input value={newTitle} type="text" onChange={handleChange} ></input>
            <input type="submit" value="Guardar"></input>
        </form>
    );
};

export default Form;