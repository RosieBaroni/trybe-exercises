import React from "react";
import Task from "./components/TaskList";

class App extends React.Component {
  tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

  render() {
    return (
      <ul>{this.tarefas.map(tarefa => Task(tarefa))}</ul>
    );
  }
}


export default App;
