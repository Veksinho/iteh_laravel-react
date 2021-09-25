import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import axios from 'axios'
import {Modal,Button,CardColumns,Card} from 'react-bootstrap'
import './tabela.css'
import { TrashFill } from 'react-bootstrap-icons';
//import { render } from 'node-sass';
//import { response } from 'express';

export default class TabelaModeli extends Component{
    constructor() {
        super();
            this.state = {
                modeli: []
            }
        
    }

    componentDidMount(){
            axios.get('http://127.0.0.1:8000/modeli')
            .then(response => {
                this.setState({ modeli: response.data });
            });
    }

    onDelete(model_id){
        console.log(model_id);
        axios.delete('http://127.0.0.1:8000/modeli/izbrisi/'+model_id)
        .then(response=>{
            var modeli1=this.state.modeli;

            for(var i=0;i<=modeli1.length;i++){
                if(modeli1[i].id==model_id){
                    modeli1.splice(i,1);
                    this.setState({modeli:modeli1});
                }
            }
        })
    }

    render(){
        return (
            <div className="mt-5">
                <CardColumns >
                    {
                        this.state.modeli.map(model=>{
                            return(
                                <Card key={model.id} className = "text-right" >
                                    <blockquote className="blockquote mb-0 card-body">
                                        <p>
                                            <strong>"</strong>{model.opis}<strong>"</strong>
                                        </p>
                                        <footer className="blockquote-footer">
                                            <small className="text-muted">
                                                {model.naziv} {model.karoserija}
                                            </small>
                                        </footer>
                                        <div className="text-center">
                                            <button className="btn btn-danger" onClick={this.onDelete.bind(this,model.id)}><TrashFill/>Obrisi model</button>

                                        </div>
                                    </blockquote>
                                </Card>
                            )
                        })
                    }
                </CardColumns>



                {/* <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tekst citata</th>
                            <th scope="col">Opis</th>
                            <th scope="col">Ime</th>
                            <th scope="col">Prezime</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.modeli.map(model=>{
                                return(
                                    <tr key={model.id}>
                                        <th scope="row">{model.id}</th>
                                        <td>{model.naziv}</td>
                                        <td>{model.opis}</td>
                                        <td>{model.ime}</td>
                                        <td>{model.prezime}</td>
                                        <td>AKCIJA</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
            </div>
    
        );
    }



  
}