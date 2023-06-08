import { Todo } from "./Modal";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";
import { useEffect, useRef, useState } from "react";

type SingleTodo = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: SingleTodo) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef  = useRef<HTMLInputElement>(null)


  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])
  return (
    <>
      <form
        className="flex  rounded-[5px] p-[20px] mt-[15px] bg-opacity-15 items-center placeholder-white text-white bg-white/[0.15] border-[0.861538px] border-white/[0.6] backdrop-blur-sm w-[29.5%] mx-auto max-[997px]:w-[100%]"
        onSubmit={(e) => handleEdit(e, todo.id)}
      >
        {edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            className="bg-opacity-15 placeholder-white text-white bg-transparent border-transparent"
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s className="flex-1 p-[5px] border-white text-[20px] rounded-[1px]   text-white">
            {todo.todo}
          </s>
        ) : (
          <span className="flex-1 p-[5px] border-white text-[20px] rounded-[1px]   text-white">
            {todo.todo}
          </span>
        )}

        <div className="flex justify-evenly ">
          <span
            className="text-[20px] text-white pr-[20px] "
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span
            className="icon pr-[20px] text-white"
            onClick={() => handleDelete(todo.id)}
          >
            <AiFillDelete />
          </span>
          <span className="icon text-white" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
