import React, { Component } from 'react'
import { useEffect } from 'react'

export default class TablaMultiplicar extends Component {

    inpNum = React.createRef();

    state = {
        resultados: [],
        num: 0,
        numeros: []
    }


    componentDidMount() {
        this.cargarNums();
    };
    

    cargarNums = () => {
        let numsAleatorios = [];

        for (let i = 0; i < 10; i++) {
            let aleatorio = parseInt((Math.random() * 10)) + 1

            numsAleatorios.push(aleatorio)
        }

        this.setState({
            numeros: numsAleatorios
        })
    }

    formSubmit = (e) =>{

        e.preventDefault();

        let num = parseInt(this.inpNum.current.value)
        this.setState({
            num: num
        })
        let resultList = [];

        for (let i = 0; i <= 10; i++) {
            resultList.push(num*i)
        }

        this.setState({
            resultados: resultList
        })

        

    }

  render() {
    return (
      <div>
        <h1>TABLA MULTIPLICAR</h1>
        <form onSubmit={this.formSubmit}>
            <label>Número:</label>
            <select ref={this.inpNum} >
                {
                    this.state.numeros.map((num, index) => {
                        return(
                            <option value={num}>{num}</option>
                        )
                    })
                }
            </select>
            <button type='submit'>ENVIAR</button>
        </form>
        <table>
        {
            this.state.resultados.map((res, index) => {
                return(
                    <tr>
                        <td key={index}>{this.state.num} * {index} =</td>
                        <td key={index}>{res}</td>
                    </tr>
                )
            })
        }
        </table>
      </div>
    )
  }
}
