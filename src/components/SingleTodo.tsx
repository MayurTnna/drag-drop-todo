import { Todo } from "./Modal";
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type SingleTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
};

const SingleTodo = ({ todo, todos, setTodos, index }: SingleTodoProps) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

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

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className="flex transition duration-200 hover:shadow-md hover:scale-[1.03] rounded-[5px] p-[20px] mt-[15px] mb-[15px] bg-opacity-15 items-center placeholder-white text-white bg-white/[0.15] border-[0.861538px] border-white/[0.6] backdrop-blur-sm w-[67.5%] mx-auto max-[997px]:w-[100%] max-[400px]:pl-0 "
          onSubmit={(e) => handleEdit(e, todo.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        // Added style
        
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              className="bg-opacity-15 placeholder-white text-white bg-transparent border-transparent"
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : todo.isDone ? (
            <s className="flex-1 p-[5px] border-white text-[20px] rounded-[1px] text-white">
              {todo.todo}
            </s>
          ) : (
            <span className="flex-1 p-[5px] border-white text-[20px] rounded-[1px] text-white">
              {todo.todo}
            </span>
          )}

          <div className="flex justify-evenly">
            <span
              className="text-[20px] text-white pr-[20px] max-[320px]:pr-[10px]"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span
              className="icon pr-[20px] max-[320px]:pr-[10px] text-white"
              onClick={() => handleDelete(todo.id)}
            >
              <AiFillDelete />
            </span>
            <span
              className="icon text-white"
              onClick={() => handleDone(todo.id)}
            >
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
