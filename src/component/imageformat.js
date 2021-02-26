import React, { Component } from 'react';

export class Imageformat extends Component {
    render() {
        const styling = {
            padding: "30px",
        };
        return (
                this.props.images.map((image) => (
                <img style={styling} src={image.photo} alt={image.title} height="300" width="300"/>
            ))
        );
    }
}
export default Imageformat;