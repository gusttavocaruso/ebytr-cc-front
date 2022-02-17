import React, { useState } from 'react';
import api from '../api';

function RegisterTask() {
  const [taskName, setTaskName] = useState('');
  const [priorityLevel, setPriorityLevel] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    const body = { taskName, priorityLevel, status };

    try {
      await api.post('/tasks/new', body);
      console.log(body);
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="submit-form">
      LISTA DE TAREFAS
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          value={ taskName }
          placeholder="Qual tarefa?"
          onChange={({ target }) => setTaskName(target.value)}
        /> <br/>

        <select onChange={({ target }) => setPriorityLevel(target.value)}>
          <option selected disabled>Qual a prioridade dela?</option>
          <option value="HIGH">HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LOW">LOW</option>
        </select> <br/>

        <select onChange={({ target }) => setStatus(target.value)}>
          <option selected disabled>
            Qual status dela?
          </option>
          <option value="ON THE WAY">ON THE WAY</option>
          <option value="STARTING">STARTING</option>
        </select> <br/>

        <button className="button" type="submit">ADD TASK</button>
      </form>
    </div>
  );
};

export default RegisterTask;
