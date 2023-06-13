import { Droppable } from "react-beautiful-dnd";
import { Todo } from "./Modal";
import SingleTodo from "./SingleTodo";

type Props = {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Array<Todo>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <>
      <div className="container flex w-[95%] justify-between flex-start mt-[15px] mx-auto gap-[20px] max-[1000px]:flex-col   ">
        <Droppable droppableId="TodosList">
          {(provided, snapshot) => (
            <div
              className="todos flex-col p-[15px] bg-opacity-15 text-white bg-white/[0.15] border-[0.861538px] border-white/[0.6] backdrop-blur-sm w-[95.5%] flex-wrap mx-auto max-[1000px]:flex-col max-[1000px]:w-[100%] max-[1000px]:px-[20px] "
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="text-white justify-center text-[20px]">
                {" "}
                Active tasks
              </span>
              {todos?.map(
                (todo, index) =>
                  todo && (
                    <SingleTodo
                      index={index}
                      todo={todo}
                      key={todo.id}
                      todos={todos}
                      setTodos={setTodos}
                    />
                  )
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="TodosRemove">
          {(provided, snapshot) => (
            <div
              className="todos remove   p-[15px]  flex-col  bg-opacity-15 text-white bg-white/[0.15] border-[0.861538px] border-white/[0.6] backdrop-blur-sm w-[95.5%] flex-wrap mx-auto max-[1000px]:flex-col max-[1000px]:w-[100%] max-[1000px]:px-[20px]"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="text-white text-[20px] justify-center">
                Completed tasks
              </span>
              {completedTodos?.map(
                (todo, index) =>
                  todo && (
                    <SingleTodo
                      index={index}
                      todo={todo}
                      key={todo.id}
                      todos={completedTodos}
                      setTodos={setCompletedTodos}
                    />
                  )
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default TodoList;
