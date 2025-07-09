import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css"; // Importando o CSS para estilização
import TodoForm from "./components/TodoForm"; // Importando o componente de formulário

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar React",
      category: "Estudos",
      iscompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia ",
      category: "Pessoal",
      iscompleted: false,
    },
    {
      id: 3,
      text: "Meeting com a equipe",
      category: "Trabalho",
      iscompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
