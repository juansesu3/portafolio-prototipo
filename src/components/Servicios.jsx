import React, { Component } from 'react'
import { Contser } from '../Styles/Servicios'
import { Gridb1 } from '../Styles/Servicios'
import { Gridb2 } from '../Styles/Servicios'
import { Gridb3 } from '../Styles/Servicios'
import { Gridb4 } from '../Styles/Servicios'
import { Stlh4 } from '../Styles/Servicios'
import { Stlh5 } from '../Styles/Servicios'
import { Stylpr } from '../Styles/Servicios'
import { Stylbt } from '../Styles/Servicios'

export default class Servicios extends Component {
    render() {
        return (
            <div>
                
                <Contser>{/* -start Contenedor */}
                    <Gridb1>
                        <Stlh4>Servicios</Stlh4>
                    </Gridb1>

                    <Gridb2>                    
                        <Stlh5>Diseño</Stlh5>
                        <Stylpr>Experiencia de Usuario</Stylpr>
                        <Stylpr>Interfaz de Usuario </Stylpr>
                        <Stylpr>Aplicaciones Web</Stylpr>
                        <Stylpr>Prueba de Concepto</Stylpr>
                        <Stylbt>Ver servicios de diseño</Stylbt>
                    </Gridb2>

                    <Gridb3>
                    <Stlh5>Desarrollo</Stlh5>
                        <Stylpr>Aplicaciones Moviles</Stylpr>
                        <Stylpr>Sitios Web</Stylpr>
                        <Stylpr>Aplicaciones Web Progresivas</Stylpr>
                        <Stylbt>Ver servicios de desarrollo</Stylbt>
                    </Gridb3>

                    <Gridb4>
                        <Stlh5>Marca</Stlh5>
                        <Stylpr>Identidad de la Marca</Stylpr>
                        <Stylpr>Estrategia de Marca</Stylpr>
                        <Stylbt>Ver servicios de Marca</Stylbt>
                    </Gridb4>
                
                </Contser>{/* Contenedor  end-*/}

            </div>
        )
    }
}
