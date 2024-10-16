import React, { Component } from 'react'

export default class FromSimple extends Component {

    inpNombre = React.createRef();
    inpEdad = React.createRef();

    state = {
        user: null,
    }

    formSubmit = (e) =>{

        e.preventDefault();

        this.setState({
            user: {
                nombre: this.inpNombre.current.value,
                edad: parseInt(this.inpEdad.current.value),
            }
        })

    }

  render() {
    return (
      <div>
        <h1>Formulario Simple React</h1>
        <form onSubmit={this.formSubmit}>
            <label>Nombre:</label>
            <input type="text" ref={this.inpNombre} />
            <label>Edad:</label>
            <input type="number" ref={this.inpEdad} />
            <button type='submit'>ENVIAR</button>
        </form>
        <hr />
        {
            this.state.user ?
            (<div>
                <h3>Nombre: {this.state.user.nombre}</h3>
                <h3>Edad: {this.state.user.edad}</h3>
            </div>):
            (<div>
                <h3>No hay Usuario</h3>
            </div>)
        }
      </div>
    )
  }
}
