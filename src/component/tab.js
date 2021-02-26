import React, { Component } from 'react';
import './styles.css';

export class Tab extends Component {
    styling = () => {
        if(this.props.tab.id == this.props.activetab) {
            return {backgroundColor: 'skyblue'}
        }
    }
    render () {
        return (
            <div className = 'tab'
                style = {this.styling()}
                onClick = {this.props.changetab.bind(this, this.props.tab.id)}>
                    {this.props.tab.title}
            </div>
        );
    }
}

export default Tab;