import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TodoForm from "./TodoForm";

const TodoOperation = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      <ItemContainer>
        {todos &&
          todos.map((todo, index) => (
            <div
              key={todo.id}
              className="list-group"
              style={{
                width: "100%",
                borderBottom: "2px solid white",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              <ElementInfo onClick={() => completeTodo(todo.id)}>
                <p>{todo.text}</p>
              </ElementInfo>
              <ElementIcons>
                <i
                  className="fas fa-user-minus"
                  onClick={() => removeTodo(todo.id)}
                ></i>
                <i
                  className="fas fa-edit"
                  onClick={() => setEdit({ id: todo.id, value: todo.text })}
                ></i>
              </ElementIcons>
            </div>
          ))}
      </ItemContainer>
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px",
          background: "rebeccapurple",
          color: "white",
          borderRadius: "20px",
          textDecoration: "none",
        }}
      >
        <i
          className="fas fa-sign-out-alt"
          style={{
            paddingRight: "2px",
            color: "white",
          }}
        ></i>
        Logout
      </Link>
    </>
  );
};

const ItemContainer = styled.div`
  margin-top: 20px;
`;
const ElementInfo = styled.div`
  color: rebeccapurple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 80%;
`;
const ElementIcons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #030303;
  i {
    font-size: large;
    cursor: pointer;
    display: block;
  }
  i:hover {
    color: red;
  }
`;

export default TodoOperation;
