import React from "react";
import { RecoilRoot } from "recoil";

import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="  h-screen flex">

    <div className=" px-2 sm:px-10 m-auto w-full max-w-[500px]">
      <h1 className="text-2xl font-semibold ">Todo List</h1>
      
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
    </div>
  );
};

export default App;
