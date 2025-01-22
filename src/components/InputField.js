import { useRef } from "react";

const InputField = (props) => {
  const inputData = useRef();

  const handleChange = () => {
    inputData.current.value !== "" &&
      props.inputValue(inputData.current.value.trim());
  };

  return (
    <input
      type="text"
      className="form-control"
      id="inputField"
      placeholder="Enter Here"
      ref={inputData}
      onChange={handleChange}
      value={props.inputData}
    />
  );
};

export default InputField;
