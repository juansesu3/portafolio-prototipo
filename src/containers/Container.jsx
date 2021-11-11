import React, { Component } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Servicios from '../components/Servicios';
import Testimonios from '../components/Testimonios';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

import Formulario from '../components/Contacto';



export default class Container extends Component {
    render() {
        return (
            <div>
                
                <Header/>
                <Hero/>
                <Projects/>
                <Servicios/>
                <Testimonios/>
                {/* formulario javaScript */}
                {/* <Contacto/> */}

                <Formulario/>
                <Footer/>

            </div>

        )
    }
}
