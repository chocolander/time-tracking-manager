import React from 'react'; 
import './App.css';
import { Button } from './components/classesLogginButtons/Button';
import { HealthBtn } from './components/classesLogginButtons/HealthBtn';
import { WorkBtn } from './components/classesLogginButtons/WorkBtn'
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <WorkBtn>Work</WorkBtn>
    <HealthBtn class="healthbtn">Health</HealthBtn>
    <Button>Hobby</Button>
    <Button>Family</Button>
    <Button>Routine</Button>
    <Button>Friends</Button>
    <Button>Education</Button>
    <Button>Entertainment</Button>

    



    </div>

  );
}

export default App;
