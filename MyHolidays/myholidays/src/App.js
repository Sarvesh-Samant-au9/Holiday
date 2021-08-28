import Login from "./Components/AuthentticationComponents/Login";
import TodoListComponent from "./Components/TodoList/TodoListComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact={true} component={Login} />
        <Route path="/todo" exact={true} component={TodoListComponent} />
      </BrowserRouter>
    </div>
  );
}

export default App;
