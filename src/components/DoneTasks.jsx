import React from 'react';

function DoneTasks() {
  return (
    <div className="tasks-border">
      TAREFAS COMPLETAS
      <div className="tasks-cards">
          {/* {tasks.map(tsk => (
            <div key={tsk._id} className="task-card">
              <p>TAREFA: {tsk.task.taskName}</p>
              <p>PRIORIDADE: {tsk.task.priorityLevel}</p>
              <p>STATUS: {tsk.task.status}</p>
              <button onClick={ () => removeTask(tsk._id) }>X</button>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default DoneTasks;
