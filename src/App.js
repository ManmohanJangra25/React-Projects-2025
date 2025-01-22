import "./App.css";
import CardComp from "./components/CardComp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoProvider from "./store";

function App() {
  return (
    <TodoProvider>
      <div className="App p-5">
        <div className="container">
          <h1 className="display-2 text-center mb-5 header-font">
            <b>Todo List</b>
          </h1>
          <div className="row justify-content-center gap-3">
            <CardComp type="NEW"></CardComp>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
