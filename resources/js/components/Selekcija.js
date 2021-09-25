import React from 'react';
import axios from 'axios'
import {Form,Select,Option} from 'react-bootstrap'
import {Modal,Button,CardColumns,Card} from 'react-bootstrap'

export default class Selekcija extends React.Component {
  constructor(props) {
      
    super(props);
    this.state = {value: '',proizvodjaci:[],proizvodjacJedan:'',model:'',opis:'',proizvodjac_id:'1',modeli:[]};

    this.promena1=this.promena1.bind(this);

  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/proizvodjaci')
    .then(response => {
        this.setState({ proizvodjaci: response.data });
    });
  }

  promena1(event){
    console.log(this.state.proizvodjac_id);
    this.setState({proizvodjac_id:event.target.value});

    axios.get('http://127.0.0.1:8000/proizvodjaci/'+event.target.value)
    .then(response=>{
      console.log('Uspenso');
      this.setState({modeli:response.data});
    })
  }

  render() {
    return (
      <div>
        <div className="row mt-5">

        </div>
        <h1 className="text-center mt-5">Izaberite proizvodjaca:</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="row justify-content-center mt-4">
        <div className="col-4">
          <div className="form-group">
            <label>Proizvodjac:</label>
            <select className="form-control" onChange={this.promena1}>
            {
              this.state.proizvodjaci.map((proizvodjac)=>
              <option 
                key={proizvodjac.id} 
                value={proizvodjac.id}
                
                >
                  {proizvodjac.naziv} {proizvodjac.zemlja}
                
              </option>)
            }
            </select>
          </div>
          <div className="form-group text-center">
            <button className="btn" type="submit">Izaberite proizvodjaca</button>
          </div>
        </div>
      </div>
        {/* <input type="submit" value="Submit" /> */}
      </form>

        <CardColumns>
          {
            this.state.modeli.map(model => {
              return (
                <Card key={model.id} className="text-right" >
                  <blockquote className="blockquote mb-0 card-body">
                    <p>
                      <strong>"</strong>{model.opis}<strong>"</strong>
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        {model.naziv} {model.karoserija}
                      </small>
                    </footer>
                  </blockquote>
                </Card>
              )
            })
          }
        </CardColumns>

      </div>
    );
  }
  }