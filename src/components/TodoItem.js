import React from 'react';

const TodoItem = props => {
    return (
        <li 
            className={props.todo.data.completed ? 'completed' : null }
            onClick={() => props.toggleCompleted(props.todo.key)}
        >
            {props.todo.data.value}
        </li>
    )
};

export default TodoItem;