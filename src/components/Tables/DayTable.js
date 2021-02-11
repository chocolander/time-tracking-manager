import React, {Component} from 'react'; 
import './DayTable.css'

class DayTable extends Component {
    render() {
        return (
            <div className="filter">
                <h2>Daily Schedule</h2>
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