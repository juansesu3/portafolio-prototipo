
import { Gridabuelo } from '../Styles/Contacto'
import { Gridpapa } from '../Styles/Contacto'
import { Grid1conct } from '../Styles/Contacto'
import { Grid2conct } from '../Styles/Contacto'
import { Grid3conct } from '../Styles/Contacto'
import { Grid4conct } from '../Styles/Contacto'
import { Grid5conct } from '../Styles/Contacto'
import { Grid6conct } from '../Styles/Contacto'
import { Stylebtnn } from '../Styles/Contacto'
import { Styleinput } from '../Styles/Contacto'
import { Styletextaa } from '../Styles/Contacto'
import React, {useState} from "react";




export default function Formulario(){
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [mensage, setMensage] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
   alert("El formualario se ha enviado ")
}


return(
    <>
    

    <Gridabuelo>{/* Grid abuelo  */}
                     <Gridpapa onSubmit={handleSubmit} >{/* Grid papa  */}


                         <Grid1conct>
                             <h5>Contacto</h5>
                         </Grid1conct>



                         <Grid2conct>
                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quod ab excepturi nulla illo. Odit!</p>

                         </Grid2conct>

                        
                         <Grid3conct>
                             
                              <Styleinput 
                              type="text" 
                              id="name"
                              name="nombre"
                              value={nombre}
                              onChange={(e) => setNombre(e.target.value)}
                              placeholder="Nombre Completo" />
                              
                         </Grid3conct>


                         <Grid4conct>
                             <Styleinput 
                             type="text"
                             id="email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                              placeholder="Correo Electronico" />
                         </Grid4conct>


                         <Grid5conct>
                             <Styletextaa 
                             name="mensaje" 
                             id="mensage"
                             value={mensage}
                              cols="30" rows="10" 
                              placeholder="Mensaje"
                              onChange={(e) => setMensage(e.target.value)} 
                              ></Styletextaa>
                         </Grid5conct>


                         <Grid6conct>
                             <Stylebtnn type="submit"/>
                             
                         </Grid6conct>
                         

                     </Gridpapa >
             </Gridabuelo>
    
    </>


);

}