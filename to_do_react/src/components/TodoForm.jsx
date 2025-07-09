import { useState } from "react";

const TodoForm = () => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviou Form!");
    
  return <div className="todo-form">
    <h2>Criar Tarefa</h2>
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Digite o Título" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} />

        <select value={category} onChange={(e) => setCategory(e.target.value)} />
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type="submit" className="todo-button">Adicionar Tarefa</button>
    </form>
  </div>
};

export default TodoForm;
