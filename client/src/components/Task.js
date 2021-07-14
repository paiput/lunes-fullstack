const Task = ({ title, done }) => {
    const style = {
        textDecoration: done ? 'line-through' : 'none'
    };

    return (
        <li>
            <h2 style={style}>{title}</h2>
            {/*done
              ? <input type="checkbox" defaultChecked></input>
              : <input type="checkbox"></input>
            */}
        </li>
    );
};

export default Task;