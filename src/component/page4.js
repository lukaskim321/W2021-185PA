import React, { Component } from "react"
import './styles.css';

export class Tabledata extends Component {
    render() {
        return (
            <div>
                <div className = "header">
                    <h1>Table</h1>
                </div>
                <div className="grid-container">
                    <div className="grid-item">#</div>
                    <div className="grid-item">Search Engine</div>
                    <div className="grid-item">1</div>
                    <div className="grid-item">
                        <a href="https://www.google.com">Google</a>
                    </div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">
                        <a href="https://www.yahoo.com">Yahoo</a>
                    </div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">
                        <a href="https://www.bing.com">Bing</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabledata