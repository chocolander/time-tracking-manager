import React, {Component} from 'react'; 
import './DayTable.css'
import styled from "styled-components"

const theme = {
    blue: {
        default: '#3f51b5',
        hover: '#283593'
    },
    pink: {
        default: '#e91e63',
        hover: '#ad1457'
    }
}

const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: white; 
    padding: 5px 15px; 
    border-radius: 5px; 
    outline: 0;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray; 
    transition: ease background-color 250ms;    
    &:hover {
        background-color: ${props => theme[props.theme].hover};
    }
`

Button.defaultProps = {
    theme: 'blue'
}

function clickMe() {
    alert('Add new schedule functionality!');
}

class DayTable extends Component {
    render() {
        return (
            <div className="filter">
                <h2>Daily Schedule</h2>
                <Button theme="pink" onClick={clickMe}>Add Task +</Button>            
                <table>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Length</th>
                        <th>Allocated time</th>
                        <th>Category</th>
                        <th>Mark Complete</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Task</td>
                        <td>Length</td>
                        <td>Allocated time</td>
                        <td>Category</td>
                        <td>Mark Complete</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Task</td>
                        <td>Length</td>
                        <td>Allocated time</td>
                        <td>Category</td>
                        <td>Mark Complete</td>
                    </tr>
                    
                    <tr>
                        <td>3</td>
                        <td>Task</td>
                        <td>Length</td>
                        <td>Allocated time</td>
                        <td>Category</td>
                        <td>Mark Complete</td>
                    </tr>
                    
                    <tr>
                        <td>4</td>
                        <td>Task</td>
                        <td>Length</td>
                        <td>Allocated time</td>
                        <td>Category</td>
                        <td>Mark Complete</td>
                    </tr>


                </table>
                
            </div>
        )
    }
}

export default DayTable;