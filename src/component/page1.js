import React, { Component } from "react"

export class Textdata extends Component {
    render() {
        return(
            <div>
                <div className = "header">
                    <h1>Text</h1>
                </div>
                <div className = "text">
                    <div>
                        <label for="fname">First Name:</label><br/>
                        <input type="text" id="fname" value="Elliott"></input><br/><br/>
                    </div>

                    <div>
                        <label for="fname">Last Name:</label><br/>
                        <input type="text" id="fname" value="Kim"></input><br/><br/>
                    </div>

                    <div>
                        <p id = "para"> Favorite Color:</p>
                        <input type="radio" id="fname" value="hello"></input><label for="fname"> Red </label><br/><br/>
                        <input type="radio" id="fname" value="hello"></input><label for="fname"> Blue </label><br/><br/>
                        <input type="radio" id="fname" value="hello"></input><label for="fname"> Green </label><br/><br/>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Textdata;