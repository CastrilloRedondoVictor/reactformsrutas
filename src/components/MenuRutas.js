import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <li><a href="/">Home</a></li>
        <li><a href="/cine">Cine</a></li>
        <li><a href="/musica">Musica</a></li>
        <li><a href="/formulario">Formulario</a></li>
        <li><a href="/collatz">collatz</a></li>
        <li><a href="/tablaMultiplicar">tablaMultiplicar</a></li>
        <li><a href="/seleccionMultiple">seleccionMultiple</a></li>
      </div>
    )
  }
}
