import React, { Component } from 'react'

export default class Collatz extends Component {

    inpNum = React.createRef();

    state = {
        list: []
    }

    formSubmit = (e) =>{

        e.preventDefault();

        let num = this.inpNum.current.value
        let collatzList = [];

        this.setState({
            list: []
        })

        while (num != 1) {
            if(num%2 == 0){
                collatzList.push(num)
                num = num / 2
            } else{
                collatzList.push(num)
                num = (num * 3) + 1
            }
        }

        collatzList.push(1)

        this.setState({
            list: collatzList
        })

    }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
            <label>Número:</label>
            <input type="number" ref={this.inpNum} />
            <button type='submit'>ENVIAR</button>
        </form>
        {this.state.list.map((num, index) => {
            return(<li key={index}>{num}</li>)
        })}
      </div>
    )
  }
}
