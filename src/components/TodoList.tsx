import { Todo } from "./Modal";
import SingleTodo from "./SingleTodo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      <div className="flex justify-evenly w-[90%] flex-wrap mx-auto max-[1000px]:flex-col max-[1000px]:w-[100%]">
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
