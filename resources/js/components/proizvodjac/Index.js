import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import DodajProizvodjaca from './DodajProizvodjaca';
import TabelaProizvodjaci from './TabelaProizvodjaci';

function Index() {
    return (
        <div>
            <div className="row mt-5">

            </div>
            <Router>
                <div className="mt-5 mb-5">
                    <Link to="/proizvodjaci" className="btn mr-5">Svi proizvodjaci</Link>
                    <Link to="/proizvodjaci/dodaj" className="btn ">Dodaj proizvodjaca</Link>
                    <Route exact path="/proizvodjaci/dodaj" component={DodajProizvodjaca}></Route>
                    <Route exact path="/proizvodjaci" component={TabelaProizvodjaci}></Route> 
                </div>
            </Router> 
        </div>

    );
}

export default Index;
