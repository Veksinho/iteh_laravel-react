import React from 'react';
import axios from 'axios'

export default class DodajProizvodjaca extends React.Component {

  constructor(props) {
      
    super(props);
    this.state = {value: '',naziv:'',zemlja:'',godina_osnivanja:'',prodatih_2020:''};

    this.handleChange = this.handleChange.bind(this);
    this.promena=this.promena.bind(this);
    this.promena1=this.promena1.bind(this);
    this.promena2=this.promena2.bind(this);
    this.promena3=this.promena3.bind(this);
    //this.handleChangeCitat = this.handleChangeCitat.bind(this);
    //this.handleChangePisac = this.handleChangePisac.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  promena(event){
    this.setState({naziv:event.target.value});
  }

  promena1(event){
    this.setState({zemlja:event.target.value});
  }

  promena2(event){
    this.setState({godina_osnivanja:event.target.value});
  }

  promena3(event){
    this.setState({prodatih_2020:event.target.value});
  }

  handleChange(event) {
    this.setState({model: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();

    if(this.state.naziv==='' || 
       this.state.zemlja==='' ||
       this.state.godina_osnivanja==='' ||
       this.state.prodatih_2020==''
    ){
      alert('Nisu uneti svi potrebni podaci');
      return;
    }    

    const proizvodjacNovi={
        naziv:this.state.naziv,
        zemlja:this.state.zemlja,
        godina_osnivanja:this.state.godina_osnivanja,
        prodatih_2020:this.state.prodatih_2020
    } 

    axios.post('http://127.0.0.1:8000/proizvodjaci/sacuvaj',proizvodjacNovi)
    .then(res=>{
      alert('Uspesno ste uneli proizvodjaca')
    });

  }

  render() {
    return (
      <div>
        <h1 className="text-center mt-5">Unesite novog proizvodjaca:</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="row justify-content-center mt-4">
        <div className="col-4">
          <div className="form-group">
            <label>Naziv proizvodjaca:</label>
            <input type="text" className="form-control" value={this.state.naziv} onChange={this.promena}>
            </input>
          </div>
          <div className="form-group">
            <label>Zemlja proizvodjaca:</label>
            <input type="text" className="form-control" value={this.state.zemlja} onChange={this.promena1}>
            </input>
          </div>
          <div className="form-group">
            <label>Godina osnivanja:</label>
            <input type="number"  className="form-control" value={this.state.godina_osnivanja} onChange={this.promena2}>
            </input>
          </div>
          <div className="form-group">
            <label>Broj prodatih vozila u 2020:</label>
            <input type="text" className="form-control" value={this.state.prodatih_2020} onChange={this.promena3}>
            </input>
          </div>


          <div className="form-group text-center">
            <button className="btn" type="submit">Sacuvaj proizvodjaca</button>
          </div>
        </div>
      </div>
      </form>
      </div>
    );
  }
  }