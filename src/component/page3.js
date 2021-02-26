import React, { Component } from "react"
import './styles.css';

export class Videodata extends Component {
    render() {
        return (
            <div>
                <div className = "header">
                        <h1>Video</h1>
                </div>
                <div className = "video-display">
                    <div>
                        <center><iframe width="300" height="200" 
                            src="https://www.youtube.com/embed/UwjMZ8nFgIM" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe></center>
                    </div>
                    <div>
                        <center><iframe width="300" height="200" 
                            src="https://www.youtube.com/embed/mDQDTPWNcQ0" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe></center>
                    </div>
                    <div>
                        <center><iframe width="300" height="200" 
                            src="https://www.youtube.com/embed/a2LFVWBmoiw" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe></center>
                    </div>
                    <div>
                        <center><iframe width="300" height="200" 
                            src="https://www.youtube.com/embed/YBzWTIexszQ" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe></center>
                    </div>
                    <div>
                        <center><iframe width="300" height="200" 
                            src="https://www.youtube.com/embed/9V3O9dDj4Ck" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe></center>
                    </div>
                    <div>
                        <center><iframe width="300" height="200" 
                            src="https://www.youtube.com/embed/ftonX5zBrHU" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe></center>
                    </div>
                    <div>
                        <center><iframe width="300" height="200" 
                            src="https://www.youtube.com/embed/4gu_v2Y0H_Y" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe></center>
                    </div>
                    <div>
                        <center><iframe width="300" height="200" 
                            src="https://www.youtube.com/embed/8CrOL-ydFMI" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe></center>
                    </div>
                </div>
            </div>
        );
    }
}

export default Videodata