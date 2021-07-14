import { useState } from 'react';

const Form = ({ addTask }) => {
    const [newTitle, setNewTitle] = useState('');

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title: newTitle,
            done: false,
            _id: Math.round(Math.random()*1000)
        }
        addTask(newTask);
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