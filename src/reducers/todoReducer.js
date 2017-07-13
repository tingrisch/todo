import * as types from "../constants/todoActionTypes"
import { concat, remove } from "lodash";

const initialState = {
    todoItems: [],
    typedToDo: ""
}

export default function todoReducer(state = initialState, action) {

    switch (action.type) {
        case types.ADD:
            return {
                ...state,
                //todoItems: concat(state.todoItems, action.payload)
                typedToDo: action.payload
            };

        case types.ADD_TODO_TO_LIST:
            return {
                ...state,
                todoItems: concat(state.todoItems, action.payload),
                typedToDo: ""
            };

        case types.DELETE:
            return {
                ...state,
                todoItems: remove(state.todoItems, function(element, index) {
                    return index !== action.payload
                })
            };

        default:
            return state;
    }
}