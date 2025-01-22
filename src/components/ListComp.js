import { useContext } from "react";
import { TodoListContext } from "../store";

const ListComp = (props) => {
  const { deleteList } = useContext(TodoListContext);

  const handleClick = (e) => {
    deleteList({
      id: props.listId,
      list: props.listData,
    });
  };
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
        {props.listData}
        <span
          className="badge text-bg-primary rounded-pill cursor-pointer"
          onClick={handleClick}
        >
          Delete
        </span>
      </li>
    </ul>
  );
};

export default ListComp;
