import React, { Component } from 'react';

import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux"

import './App.css';

import ToDoList from "./components/ToDoList";
import Input from "./components/Input";
import AddItem from "./components/AddItem"

import { onChangeHandler, onClickHandler, onDeleteHandler } from "./actions/todoActions.js"

const App = ({ todoItems, typedToDo, onChangeHandler, onClickHandler, onDeleteHandler }) =>
  <div>
    <Input value={ typedToDo } onChangeHandler={ onChangeHandler } />
    <AddItem onClickHandler={ () => { onClickHandler(typedToDo) } } />
    <ToDoList list={ todoItems } onDeleteHandler={ onDeleteHandler } />
  </div>;

function mapStateToProps(state) {
  return {
    typedToDo: state.typedToDo,
    todoItems: state.todoItems
  }
}

// onChangeHandler(event.target.value) ist der Action-Creator, eine Funktion, die einfach nur ein Action-Objekt zurück liefert, das beschreibt, um was für eine Action es sich handelt.
const mapDispatchToProps = dispatch => ({
  onChangeHandler: (event) => dispatch(onChangeHandler(event.target.value)),
  onClickHandler: (newTodo) => dispatch(onClickHandler(newTodo)),
  onDeleteHandler: (clickedTodo) => dispatch(onDeleteHandler(clickedTodo))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
