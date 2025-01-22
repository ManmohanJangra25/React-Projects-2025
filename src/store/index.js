import { useReducer, createContext } from "react";

export const TodoListContext = createContext({
  todoList: [],
  addList: () => {},
  deleteList: () => {},
});

const todoListReducer = (state, action) => {
  let newList = JSON.parse(localStorage.getItem("ListData"));

  if (action.type === "ADDLIST") {
    newList = [action.payload.data, ...newList];
    localStorage.setItem("ListData", JSON.stringify(newList));
  }

  if (action.type === "DELETELIST") {
    newList = state.filter((data) => data.id !== action.payload.data.id);
    let existingList = JSON.parse(localStorage.getItem("ListData"));

    if (existingList) {
      let newUpdatedList = existingList.filter(
        (data) => data.id !== action.payload.data.id
      );
      localStorage.setItem("ListData", JSON.stringify(newUpdatedList));
    }
  }

  return newList;
};

const TodoProvider = (props) => {
  let [todoList, dispatchTodoList] = useReducer(todoListReducer, []);

  todoList = JSON.parse(localStorage.getItem("ListData"));

  const addList = (data) => {
    dispatchTodoList({
      type: "ADDLIST",
      payload: {
        data,
      },
    });
  };

  const deleteList = (data) => {
    dispatchTodoList({
      type: "DELETELIST",
      payload: {
        data,
      },
    });
  };

  return (
    <TodoListContext.Provider value={{ todoList, addList, deleteList }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoProvider;
