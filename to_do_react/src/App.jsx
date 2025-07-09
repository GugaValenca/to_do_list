import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css"; // Importando o CSS para estilização

function App() {

  const[todos, setTodos] = useState([

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
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
