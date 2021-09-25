import React from 'react';
import axios from 'axios'
import {Form,Select,Option} from 'react-bootstrap'

export default class NameForm extends React.Component {

    constructor(props) {
      
      super(props);
      this.state = {value: '',proizvodjaci:[],proizvodjacJedan:'',model:'',opis:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.promena=this.promena.bind(this);
      this.promena1=this.promena1.bind(this);
      this.promena2=this.promena2.bind(this);
      //this.handleChangeCitat = this.handleChangeCitat.bind(this);
      //this.handleChangePisac = this.handleChangePisac.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/proizvodjaci')
      .then(response => {
          this.setState({ proizvodjaci: response.data });
      });
    }
  
    promena(event){
      this.setState({model:event.target.value});
    }

    promena1(event){
      this.setState({proizvodjacJedan:event.target.value});
    }

    promena2(event){
      this.setState({opis:event.target.value});
    }


    handleChange(event) {
      this.setState({model: event.target.value});
    }

  
    handleSubmit(event) {

      if(this.state.proizvodjacJedan===''){
        this.state.proizvodjacJedan=1;
      }

      alert(this.state.model+' '+this.state.proizvodjacJedan+' '+this.state.opis);
      event.preventDefault();
      const modelNovi={
         naziv:this.state.model,proizvodjac_id:this.state.proizvodjacJedan,opis:this.state.opis
      }

      axios.post('http://127.0.0.1:8000/modeli/sacuvaj',modelNovi)
      .then(res=>console.log(res.data));

    }
  
    render() {
      return (
        <div>
          <h1 className="text-center mt-5">Unisite novi model:</h1>
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
            <div className="form-group">
              <label>Naziv modela:</label>
              <input type="text" className="form-control" value={this.state.model} onChange={this.promena}>
              </input>
            </div>
            <div className="form-group">
              <label>Opis:</label>
              <input type="text" className="form-control" value={this.state.opis} onChange={this.promena2}>
              </input>
            </div>
            <div className="form-group text-center">
              <button className="btn" type="submit">Sacuvaj model</button>
            </div>
          </div>
        </div>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        </div>
      );
    }
  }