import React, { Component } from 'react';
import Imageformat from './imageformat'
import { SRLWrapper } from "simple-react-lightbox";

import az from './images/az.jpg'
import joey from './images/joey.jpg'
import deftones from './images/deftones.jpg'
import fa from './images/fa.jpg'
import nas from './images/nas.jpg'
import denzel from './images/denzel.jpg'
import primer from './images/primer.jpg'
import vangelis from './images/vangelis.jpg'

export class Imagedata extends Component {
    render() {
        const albums = [{
            photo: az,
            id: 1
        },
        {
            photo: joey,
            id: 2
        },
        {
            photo: deftones,
            id: 3
        },
        {
            photo: fa,
            id: 4
        },
        {
            photo: nas,
            id: 5
        },
        {
            photo: denzel,
            id: 6
        },
        {
            photo: primer,
            id: 7
        },
        {
            photo: vangelis,
            id: 8
        }
        ]
        
        return (
            <div>
                <div className = "header">
                    <h1>Image</h1>
                </div>
                <SRLWrapper>
                    <center>
                        <Imageformat images = {albums}/>
                    </center>
                </SRLWrapper>
            </div>
        )
    }
}

export default Imagedata