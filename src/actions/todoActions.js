import * as types from "../constants/todoActionTypes.js";

export function onChangeHandler(todo) {
    return {
        type: types.ADD,
        payload: todo
    };
};

export function onClickHandler(todo) {
    return {
        type: types.ADD_TODO_TO_LIST,
        payload: todo
    };
};

export function onDeleteHandler(index) {
    return {
        type: types.DELETE,
        payload: index
    };
};