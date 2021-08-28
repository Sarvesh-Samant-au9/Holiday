import React, { useState } from "react";
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
    <ItemContainer>
      {todos &&
        todos.map((todo, index) => (
          <Element key={index}>
            <ElementInfo key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
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
          </Element>
        ))}
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  margin-top: 20px;
`;
const Element = styled.div`
  width: 80vw !important;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 2px solid #fff;
  font-size: larger;
`;
const ElementInfo = styled.div`
  width: 180vw !important;
  color: rebeccapurple;
`;
const ElementIcons = styled.div`
  i {
    padding: 0px 20px;
    font-size: large;
    cursor: pointer;
  }
  i:hover {
    color: red;
  }
`;

export default TodoOperation;
