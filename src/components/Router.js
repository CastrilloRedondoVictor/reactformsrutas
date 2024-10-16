import { Component } from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";
import FromSimple from "./FromSimple";
import Collatz from "./Collatz";
import TablaMultiplicar from "./TablaMultiplicar";
import SeleccionMultiple from "./SeleccionMultiple";

export default class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/cine' element={<Cine/>}></Route>
                    <Route path='/musica' element={<Musica/>}></Route>
                    <Route path='/formulario' element={<FromSimple/>}></Route>
                    <Route path='/collatz' element={<Collatz/>}></Route>
                    <Route path='/tablaMultiplicar' element={<TablaMultiplicar/>}></Route>
                    <Route path='/seleccionMultiple' element={<SeleccionMultiple/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}