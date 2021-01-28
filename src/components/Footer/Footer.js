import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                       {/*  Column1 */}
                       <div className="col">
                           <h4>Chocolander</h4>
                           <ul className="list-unstyled">
                               <li>123-456-7890</li>
                               <li>Toronto, Ontario</li>
                               <li>Virtual Company</li>
                           </ul>
                       </div>
                       {/*  column2 */}
                       <div className="col">
                           <h4>STUFF</h4>
                           <ul className="list-unstyled">
                               <li>ABC D</li>
                                <li></li>
                                <li></li>
                           </ul>
                       </div>
                       {/*  column3 */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer; 
