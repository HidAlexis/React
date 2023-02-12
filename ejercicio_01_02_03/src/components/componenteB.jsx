import React, { Component } from "react";
import PropTypes from "prop-types";
import ComponenteA from "./componenteA";

class ComponenteB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conectado: this.props.conectado,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            conectado: !prevState.conectado,
        }));
    }

    render() {
        const { conectado } = this.state;
        return (
            <div>
                {conectado ? (
                    <p>Contacto En Línea</p>
                ) : (
                    <p>Contacto No Disponible</p>
                )}
                <button onClick={this.handleClick}>Cambiar Estado</button>
            </div>
        );
    }
}

ComponenteB.propTypes = {
    contacto: PropTypes.shape({
        conectado: PropTypes.bool.isRequired,
    }).isRequired,
};

export default ComponenteB;
