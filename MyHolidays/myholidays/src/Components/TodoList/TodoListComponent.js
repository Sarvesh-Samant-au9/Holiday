import React, { useState } from "react";
import styled from "styled-components";

import TodoForm from "./TodoForm";
import TodoOperation from "./TodoOperation";

const TodoListComponent = () => {
  const [arrayData, setArrayData] = useState([]);

  const addDataToList = (data) => {
    if (!data.text || /^\s*$/.test(data.text)) {
      return;
    }
    const newDataAdded = [data, ...arrayData];
    setArrayData(newDataAdded);
    console.log(...arrayData);
  };

  const deleteDataToDo = (id) => {
    const removedData = [...arrayData].filter((todo) => todo.id !== id);
    setArrayData(removedData);
  };
  const updateDataToDo = (id, newdata) => {
    if (!newdata.text || /^\s*$/.test(newdata.text)) {
      return;
    }
    setArrayData((ele) => ele.map((item) => (item.id === id ? newdata : item)));
  };

  const completeTodo = (id) => {
    let updatedTodos = arrayData.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setArrayData(updatedTodos);
  };

  return (
    <TodoListContainer>
      <h3 style={{ marginTop: "30px" }}>ToDo List</h3>
      <div>
        <TodoForm onSubmit={addDataToList} />
      </div>
      <TodoOp>
        <TodoOperation
          todos={arrayData}
          completeTodo={completeTodo}
          removeTodo={deleteDataToDo}
          updateTodo={updateDataToDo}
        />
      </TodoOp>
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #cacaca;
  padding: 0px 15px;
  h3 {
    font-size: 36px;
    font-family: sans-serif;
  }
  div {
    width: 90%;
  }
  form {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  input {
    width: 80%;
    height: 40px;
    outline: none;
    border: none;
    border: 2px solid transparent;
    padding: 0px 10px;
    font: 16px;
    font-family: sans-serif;
  }
  input:focus {
    border: 2px solid rgb(197, 255, 186);
  }
  button {
    border: none;
    outline: none;
    border: 2px solid rgb(197, 255, 186);
  }
  @media screen and (max-width: 500px) {
    input {
      width: 70%;
    }
  }
  @media screen and (max-width: 300px) {
    input {
      width: 60%;
    }
  }
`;

const TodoOp = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default TodoListComponent;
