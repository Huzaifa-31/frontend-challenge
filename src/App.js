import React from "react";
import { RecoilRoot } from "recoil";

import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className=" h-screen flex">

    <div className="  m-auto w-[400px]">
      <h1 className="text-2xl font-semibold ">Todo List</h1>
      
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
    </div>
  );
};

export default App;
