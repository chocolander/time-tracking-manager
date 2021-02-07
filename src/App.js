import React from 'react'; 
import './App.css';
import { Button } from './components/classesLogginButtons/Button';
import { HealthBtn } from './components/classesLogginButtons/itemButtons/HealthBtn';
import { WorkBtn } from './components/classesLogginButtons/itemButtons/WorkBtn';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import DayTable from './components/Tables/DayTable'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <Header/>
    <WorkBtn>Work</WorkBtn>
    <HealthBtn class="healthbtn">Health</HealthBtn>
    <Button>Hobby</Button>
    <Button>Family</Button>
    <Button>Routine</Button>
    <Button>Friends</Button>
    <Button>Education</Button>
    <Button>Entertainment</Button>
    <DayTable/>
    </div>
    <Footer/>
    </div>

  );
}

export default App;
