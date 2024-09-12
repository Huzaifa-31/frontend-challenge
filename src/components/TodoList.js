import React from "react";
import { useRecoilValue } from "recoil";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "../recoil_state";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      {/* <TodoListStats /> */}
      <div className="divide-y-2 border-y my-3">
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
      </div>
      <div
      className="flex justify-center gap-10 w-full"
       >
        <TodoItemCreator />
        {/* <TodoListFilters /> */}
      </div>

    </>
  );
};

export default TodoList;
