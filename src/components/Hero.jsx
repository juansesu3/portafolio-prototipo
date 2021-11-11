import React, { Component } from 'react'
import {Conth} from '../Styles/Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { Ic } from '../Styles/Hero'
import { Fontlora } from '../Styles/Proyects'
import { H2 } from '../Styles/Hero'
import { Par } from '../Styles/Hero'
import '../Styles/Fonts.css'



export default class Hero extends Component {
    render() {
        return (
            <Conth>
                <Fontlora>
                    <div>
                    <img src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1636165963/jxaithulxttayzi2pk8j.jpg" alt="" />
                    </div>

                    <H2>
                        <p>¡Hi there! <br/>I'm Juan S. Suarez</p>
                    </H2>

                    <Par>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsum.</p>
                    </Par>
                    
                    <Ic>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </Ic>
                
                </Fontlora>
            </Conth>
        )
    }
}
