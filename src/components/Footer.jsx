import React, { Component } from 'react'
import { Gridlayoutfooter } from '../Styles/Footer'
import { Grid1foot } from '../Styles/Footer'
import { Grid2foot } from '../Styles/Footer'
import { Grid3foot } from '../Styles/Footer'
import { Grid4foot } from '../Styles/Footer'
import { Grid5foot } from '../Styles/Footer'
import { Grid6foot } from '../Styles/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi, faBrain} from '@fortawesome/free-solid-svg-icons';





export default class Footer extends Component {
    render() {
        return (
            <div>
                <Gridlayoutfooter>
                    <Grid1foot>
                        <h1><FontAwesomeIcon icon={faJedi} /></h1>
                    </Grid1foot>

                    <Grid2foot>
                        <p>¡Never<br/> Give<br/> Up!</p>
                    </Grid2foot>

                    <Grid3foot>
                        <p>Copyright 2021-Todos los derechos reservados</p>
                    </Grid3foot>

                    <Grid4foot><FontAwesomeIcon icon={faBrain} /></Grid4foot>

                    <Grid5foot><FontAwesomeIcon icon={faBrain} /></Grid5foot>

                    <Grid6foot><FontAwesomeIcon icon={faBrain} /></Grid6foot>

                </Gridlayoutfooter>
                
            </div>
        )
    }
}
