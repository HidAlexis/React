import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './componenteB'


class ComponenteA extends Component {

    render() {
        const { nombre, apellido, email, conectado } = this.props;
        return (
            <div>
                <p>Nombre: { nombre } </p>
                <p>Apellido: { apellido }</p>
                <p>Email: { email } </p>
                <ComponenteB></ComponenteB>
            </div>
        );
    }
}


ComponenteA.propTypes = {
    nombre:PropTypes.string.isRequired,
    apellido:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    conectado:PropTypes.bool.isRequired,
};


export default ComponenteA;
