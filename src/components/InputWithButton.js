import { useContext, useState } from "react";
import InputField from "./InputField";
import { TodoListContext } from "../store";

const InputWithButton = () => {
  const [list, setList] = useState("");
  const { addList } = useContext(TodoListContext);

  const getListInputData = (data) => {
    setList(data);
  };

  const handleClick = () => {
    addList({
      id: Date.now(),
      list: list,
    });
    setList("");
  };

  return (
    <div className="input-group mb-3">
      <InputField inputValue={getListInputData} inputData={list} />
      <button
        className="btn btn-sm btn-primary"
        type="button"
        id="button-addon2"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default InputWithButton;
