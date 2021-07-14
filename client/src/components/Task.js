import { useState } from 'react';

const Task = ({ title, done }) => {
    const [checked, setChecked] = useState(done);
    
    const toggleChecked = () => {
        setChecked(value => !value);
    }

    const style = {
        textDecoration: checked ? 'line-through' : 'none'
    };

    return (
        <li>
            <h2 style={style}>{title}</h2>
            {done
              ? <input type="checkbox" onClick={toggleChecked} defaultChecked></input>
              : <input type="checkbox" onClick={toggleChecked} ></input>
            }
        </li>
    );
};

export default Task;