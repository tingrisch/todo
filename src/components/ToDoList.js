import React from 'react';

const ToDoList = ({ list, onDeleteHandler }) =>
    <div>
        {list.map((item, index) =>
            <li key={index}>
                <a href="#" onClick={() => onDeleteHandler(index)}>{ item }</a>
            </li>
        )}
    </div>;

export default ToDoList;