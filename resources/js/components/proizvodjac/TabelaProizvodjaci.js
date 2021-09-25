import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import axios from 'axios'
//import { render } from 'node-sass';
//import { response } from 'express';

export default class TabelaProizvodjaci extends Component{
    constructor() {
        super();
            this.state = {
                proizvodjaci: []
            }
        
    }

    componentDidMount(){
            axios.get('http://127.0.0.1:8000/proizvodjaci')
            .then(response => {
                this.setState({ proizvodjaci: response.data });
            });
    }

    render(){
        return (
            <div>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Naziv</th>
                            <th scope="col">Zemlja</th>
                            <th scope="col">Godina osnivanja</th>
                            <th scope="col">Prodatih vozila 2020.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.proizvodjaci.map(proizvodjac=>{
                                return(
                                    <tr key={proizvodjac.id}>
                                        <th scope="row">{proizvodjac.id}</th>
                                        <td>{proizvodjac.naziv}</td>
                                        <td>{proizvodjac.zemlja}</td>
                                        <td>{proizvodjac.godina_osnivanja}</td>
                                        <td>{proizvodjac.prodatih_2020}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    
        );
    }

}


