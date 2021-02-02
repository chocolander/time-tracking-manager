import React from 'react'; 
import './App.css';
import { Button } from './components/classesLogginButtons/Button';
import { HealthBtn } from './components/classesLogginButtons/itemButtons/HealthBtn';
import { WorkBtn } from './components/classesLogginButtons/itemButtons/WorkBtn';
import { HobbyBtn } from './components/classesLogginButtons/itemButtons/HobbyBtn';
import { FamilyBtn } from './components/classesLogginButtons/itemButtons/FamilyBtn';
import { RoutineBtn } from './components/classesLogginButtons/itemButtons/RoutineBtn';
import { FriendBtn } from './components/classesLogginButtons/itemButtons/FriendBtn';
import { EducationBtn } from './components/classesLogginButtons/itemButtons/EducationBtn';
import { EntertainmentBtn } from './components/classesLogginButtons/itemButtons/EntertainmentBtn';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    
    <div style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10}}>
    <WorkBtn>Work</WorkBtn>
    <HealthBtn>Health</HealthBtn>
    <HobbyBtn>Hobby</HobbyBtn>
    <FamilyBtn>Family</FamilyBtn>
    <RoutineBtn>Routine</RoutineBtn>
    <FriendBtn>Friend</FriendBtn>
    <EducationBtn>Education</EducationBtn>
    <EntertainmentBtn>Entertainment</EntertainmentBtn>
    </div>
    
    
    



    </div>

  );
}

export default App;
