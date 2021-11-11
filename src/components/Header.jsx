import React, { Component } from 'react';
import { Cont } from '../Styles/Contenedor';
import { Headers} from '../Styles/Header';
import { But } from '../Styles/Header';
import { Navig } from '../Styles/Header';
import { Log } from '../Styles/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faJedi } from '@fortawesome/free-solid-svg-icons';
import { Spn } from '../Styles/Header';
import '../Styles/Fonts.css'



export default class Header extends Component {
    render() {
        return (
            <Cont>
                <Headers>
                    <Navig>

          
                    <a href=""><img src="" alt="" /><Spn ><FontAwesomeIcon icon={faAlignJustify} /></Spn></a>

                    <Log><FontAwesomeIcon icon={faJedi} /></Log>

                    <But className="nunitoStyle">Curriculum</But>
                    </Navig>  
                </Headers>
            </Cont>
        )
    }
}
