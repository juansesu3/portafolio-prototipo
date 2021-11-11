
import React, { Component } from 'react'
import { Fontlora } from '../Styles/Proyects'
import { Tittle } from '../Styles/Proyects'
import { Textstyle } from '../Styles/Proyects'
import { Gridstyle } from '../Styles/Proyects'
import { Grid1 } from '../Styles/Proyects'
import { Grid2 } from '../Styles/Proyects'
import { Grid3 } from '../Styles/Proyects'
import { Grid4 } from '../Styles/Proyects'
import { Grid5 } from '../Styles/Proyects'
import { Sth2 } from '../Styles/Proyects'
import { Stp } from '../Styles/Proyects'
import { Contbu } from '../Styles/Proyects'
import { Butt1 } from '../Styles/Proyects'
import { Butt2 } from '../Styles/Proyects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Img } from '../Styles/Proyects'



export default class Projects extends Component {
    render() {
        return (

            <div>

                <Fontlora>
                
                    <Tittle>
                        <p >Parece magia,<br/> funciona con código.</p>
                    </Tittle>

                    <Textstyle>
                        <p>A lo largo de mi carrera como Fronted, he tenedio el privilegio de trabajar en proyectos retadores e increibles</p>
                    </Textstyle>

                    <Gridstyle>
                        <Grid1><div></div></Grid1>

                        <Grid2>
                            <div>
                                <Sth2>
                                    Block Master
                                </Sth2>
                                <Stp>                  
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A minima nihil vitae sit dolorum natus iste fugit aliquam dicta. Eveniet officiis officia fugit! Nemo dolore natus itaque minima, aliquam inventore.
                                </Stp>
                                <Contbu>
                                <Butt1>Ver codigo</Butt1>
                                <Butt2>Ver proyecto completo </Butt2>
                                </Contbu>
                            </div>
                        </Grid2>

                        <Grid3></Grid3>

                        <Grid4>
                            <div>
                                <Sth2>
                                    Formulario Responsive
                                </Sth2>
                                <Stp>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A minima nihil vitae sit dolorum natus iste fugit aliquam dicta. Eveniet officiis officia fugit! Nemo dolore natus itaque minima, aliquam inventore.
                               </Stp>

                               <Contbu>
                                <Butt1>Ver codigo</Butt1>
                                <Butt2>Ver proyecto completo </Butt2>
                                </Contbu>
                            
                            </div>
                        </Grid4>
                        
                        <Grid5>
                            
                            <Butt1>Ver mas proyectos <span><FontAwesomeIcon icon={faArrowRight} /></span></Butt1>

                        </Grid5 >
                        
                    </Gridstyle>
            
                </Fontlora>

            </div>
        )

    }
}












