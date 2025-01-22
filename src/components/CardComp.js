import { useContext } from "react";
import CardTitle from "./CardTitle";
import InputWithButton from "./InputWithButton";
import ListComp from "./ListComp";
import { TodoListContext } from "../store";

const CardComp = (props) => {
  const { todoList } = useContext(TodoListContext);
  let cardHeaderTitle;
  if (props.type === "NEW") {
    cardHeaderTitle = "New List";
  }

  return (
    <div className="card col-md-4">
      <div className="card-body">
        <CardTitle title={cardHeaderTitle} />
        <InputWithButton />
        {todoList.length !== 0 ? (
          todoList.map((data) => (
            <ListComp listData={data.list} listId={data.id} key={data.id} />
          ))
        ) : (
          <div className="alert alert-info ps-3 p-1" role="alert">
            Your next big task starts here—let's add it!
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComp;
