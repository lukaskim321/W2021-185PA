import React, { Component } from 'react';
import Textdata from './page1';
import Imagedata from './page2';
import Videodata from './page3';
import Tabledata from './page4';
import Emaildata from './page5';

export class Body extends Component {
    displaycontent = () => {
        var activetab = this.props.activetab;
        if(activetab == 1) {
            return <Textdata/>
        } else if (activetab == 2) {
            return <Imagedata/>
        } else if (activetab == 3) {
            return <Videodata/>
        } else if (activetab == 4) {
            return <Tabledata/>
        } else {
            return <Emaildata/>
        }
    }
    render() {
        return(
            this.displaycontent()
        );
    }
}

export default Body;