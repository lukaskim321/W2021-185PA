import React, { Component } from "react"
import './styles.css';

export class Emaildata extends Component {
    constructor(props) {
        super();
        this.state = {
            id: ''
        }
    }

    Checkemail = (event) => {
        event.preventDefault()
	    var message = "Invalid email address"
	    var ucsb = /\S+@\S+\b.com\b/;
	    var com = /\S+@+\bucsb.edu\b/;

	    document
	        .getElementById("error")
		    .innerHTML = message;

		    if(ucsb.test(event.target[0].value) || com.test(event.target[0].value)) {
		        document.getElementById("error").innerHTML = "Email succesfully recorded";
		    }
    }

    render() {
        return (
            <div>
                <div className = "header">
                    <h1>Email</h1>
                </div>
                <div className = "text">
                    <div>
                        <form onSubmit = {this.Checkemail}>
                            <label for = "email">Email:</label><br/>
                            <input type = "text" name = "email" ref = {node => (this.inputNode = node)} required></input><br/><br/>
                            <button type = "submit">Submit</button>
                        </form>
                    </div>
                    <br/><div id="error"></div>
                </div>
            </div>
        );
    }
}

export default Emaildata