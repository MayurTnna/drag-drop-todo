import { useState } from "react";
import "./assets/scss/app.scss";
import InputField from "./components/InputField";
import { Todo } from "./components/Modal";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="app">
          <div
            className=" w-[100vw] h-[100vh] bg-gradient-to-br from-black via-black to-[#434343] flex-col items-center overflow-auto
      
      
      "
          >
            <div className="text-[40px] uppercase z-1 text-center pt-[30px] text-[white] max-[800px]:pt-[15px] max-[800px]:text-[35px]">
              Taskify
            </div>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList
              todos={todos}
              setTodos={setTodos}
              completedTodos={completedTodos}
              setCompletedTodos={setCompletedTodos}
            />
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
