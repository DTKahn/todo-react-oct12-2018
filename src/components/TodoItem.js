import React from 'react';

const TodoItem = props => {
    return (
        <li 
            className={props.todo.completed ? 'completed' : null }
            onClick={() => props.toggleCompleted(props.todo)}
        >
            {props.todo.value}
        </li>
    )
};

export default TodoItem;