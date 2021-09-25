import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
// import Home from './Home';
import './css/Header.css'
import Proizvodjac from './proizvodjac/Index'
import Model from './modeli/Index'
import Selekcija from './Selekcija';


function Header() {

    return (
        <Router>
             <div >
                <nav className="navbar navbar-expand-lg fixed-top" id="navi">
                <a className="navbar-brand" href="#">CarBuyer</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* <Link className="nav-item nav-link active" to="/">Pocetna <span className="sr-only">(current)</span></Link> */}
                            <Link className="nav-item nav-link" to="/proizvodjaci">Proizvodjaci</Link>
                            <Link className="nav-item nav-link" to="/modeli">Modeli</Link>
                            <Link className="nav-item nav-link" to="/selekcija">Selekcija</Link>
                        </div>
                    </div>
                </nav>
            {/* <Route exact path='/' component={Proizvodjac}></Route> */}
            <Route exact path='/proizvodjaci' component={Proizvodjac}></Route>
            <Route exact path='/modeli' component={Model}></Route>
            <Route exact path='/selekcija' component={Selekcija}></Route>
           </div> 
        </Router>
    );
}

export default Header;
