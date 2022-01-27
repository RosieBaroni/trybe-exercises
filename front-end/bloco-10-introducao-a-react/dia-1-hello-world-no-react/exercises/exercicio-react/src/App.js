import React from "react";
import Task from "./components/TaskList";

class App extends React.Component {
  tarefas = ['Acordar', 'Arrumar a cama', 'Fazer o café', 'Escovar os dentes', 'Ir estudar'];

  render() {
    return (
      <ul>{this.tarefas.map(tarefa => Task(tarefa))}</ul>
    );
  }
}


export default App;
