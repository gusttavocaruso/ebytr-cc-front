import React, { useState, useEffect } from 'react';
import api from '../api';

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then((resp) => setTasks(resp.data));
  }, [tasks]);

  const removeTask = async (id) => {
    await api.delete(`/task/${id}`);
  };

  return (
    <div className="tasks-border">
      TAREFAS À FAZER
        <div className="tasks-cards">
          {tasks.map(tsk => (
            <div key={tsk._id} className="task-card">
              <p>TAREFA: {tsk.task.taskName}</p>
              <p>PRIORIDADE: {tsk.task.priorityLevel}</p>
              <p>STATUS: {tsk.task.status}</p>
              <button onClick={ () => removeTask(tsk._id) }>DONE</button>
              <button onClick={ () => removeTask(tsk._id) }>X</button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Tasks;
