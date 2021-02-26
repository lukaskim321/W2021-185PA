import './App.css';
import Body from './component/body'
import Tablist from './component/tablist'
import React, { Component } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import ScrollUpButton from "react-scroll-up-button";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      activetab: 1
    }
    this.changetab = (id) => {
      this.setState({
        activetab: id
      })
    }
  }

  render(){
    const tabs =[{
      id: 1,
      title: 'Text'
    },
    {
      id: 2,
      title: 'Image'
    },
    {
      id: 3,
      title: 'Video'
    },
    {
      id: 4,
      title: 'Table'
    },
    {
      id: 5,
      title: 'Email'
    }]

    return (
      <SimpleReactLightbox>
        <div className = "body">
          <ScrollUpButton/>
          <div className="navigation-bar">
            <Tablist tabs = {tabs} activetab = {this.state.activetab} changetab = {this.changetab}/>
          </div>
          <div className = "main-body">
            <Body activetab = {this.state.activetab}/>
          </div>
        </div>
      </SimpleReactLightbox>
    );
  }
}

export default App;
