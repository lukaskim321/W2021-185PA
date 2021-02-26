import React, { Component } from 'react';
import Tab from './tab';

export class Tablist extends Component {
    render() {
        return (
            this.props.tabs.map((tab) => (
            <Tab tab = {tab} activetab = {this.props.activetab} changetab = {this.props.changetab}/>
            ))
        );
    }
}

export default Tablist;