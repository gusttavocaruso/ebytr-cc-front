import React from 'react';
import DoneTasks from '../components/DoneTasks';
import RegisterTask from '../components/RegisterTask';
import Tasks from '../components/Tasks';

function Home() {
  return (
    <div className="home-content">
        <RegisterTask />
        <Tasks />
        <DoneTasks />
    </div>
  )
};

export default Home;
