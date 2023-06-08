interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <>
      <div className="pt-[30px] text-center flex justify-center">
        <div className="text-center relative">
          <form onSubmit={(e) => handleAdd(e)}>
            <input
              className="bg-opacity-15 placeholder-white text-white bg-white/[0.15] border-[0.861538px] border-white/[0.6] backdrop-blur-sm rounded-[42px] w-[344px] h-[56px] font-Gilroy-Regular text-[18px] leading-[150%]  opacity-[0.8] max-[700px]:w-[auto] focus:outline-none outline-none "
              type="text"
              placeholder="Enter a task"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-[16px] right-[18px] text-white "
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputField;
