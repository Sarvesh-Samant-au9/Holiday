import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
function TodoForm(props) {
  const [inputValue, setInputValue] = useState(
    props.edit ? props.edit.value : ""
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      text: inputValue,
    });
    setInputValue("");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Update task"
            value={inputValue}
            onChange={onHandleChange}
            ref={inputRef}
            type="text"
          />
          <button onClick={onHandleSubmit}>Update</button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a task"
            value={inputValue}
            onChange={onHandleChange}
            ref={inputRef}
            type="text"
          />
          <button onClick={onHandleSubmit}>Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
