import { useState } from "react";
import "./assets/scss/app.scss";
import InputField from "./components/InputField";
import { Todo } from "./components/Modal";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="app w-[100vw] h-[100vh] bg-gradient-to-br from-black via-black to-[#434343] flex-col items-center ">
        <div className="text-[40px] uppercase z-1 text-center pt-[30px] text-[white] max-[800px]:pt-[15px] max-[800px]:text-[35px]">
          Taskify
        </div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
