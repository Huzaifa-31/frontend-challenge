import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil_state";

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="border-b pb-2 flex flex-row gap-3 pt-3 w-full justify-center sm:justify-normal">
      <div
            className=" min-w-7 h-7 flex justify-center items-center bg-primary text-white text-sm rounded-full focus:outline-none"
          >
            <span className=" h-6  font-black">+</span>
          </div>
      <input className="outline-none" type="text" 
      placeholder="Add new todo"
      value={inputValue} onChange={onChange} />
      <button className="btn btn-primary btn-sm text-nowrap " onClick={addItem}>Add Item</button>
    </div>
  );
}

export default TodoItemCreator;
