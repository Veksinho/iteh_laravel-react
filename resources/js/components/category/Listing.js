import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Add from './Add';
import axios from 'axios'
//import { render } from 'node-sass';
//import { response } from 'express';

export default class Listing extends Component{

    constructor() {
        super();
            this.state = {
                categories: []
            }
        
    }

    componentDidMount(){
            axios.get('http://127.0.0.1:8000/categories')
            .then(response => {
                this.setState({ categories: response.data });
            });
    }

    onDelete(category_id){
        console.log(category_id);
        axios.delete('http://127.0.0.1:8000/categories/delete/'+category_id)
        .then(response=>{
            var categories=this.state.categories;

            for(var i=0;i<=categories.length;i++){
                if(categories[i].id==category_id){
                    categories.splice(i,1);
                    this.setState({categories:categories});
                }
            }
        })
    }

    render(){
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map(category=>{
                                return(
                                    <tr key={category.id}>
                                        <th scope="row">{category.id}</th>
                                        <td>{category.name}</td>
                                        <td>{category.active}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
                                        <td><a href="#" onClick={this.onDelete.bind(this,category.id)}>Delete</a></td>
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


