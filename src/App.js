import React from 'react'; 
import './App.css';
import { Button } from './components/classesLogginButtons/Button';
import { HealthBtn } from './components/classesLogginButtons/itemButtons/HealthBtn';
import { WorkBtn } from './components/classesLogginButtons/itemButtons/WorkBtn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


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
    <Footer/>



    </div>

  );
}

export default App;
