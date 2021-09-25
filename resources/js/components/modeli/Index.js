import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import TabelaModeli from './TabelaModeli';
import DodajModel from './DodajModel';

function Index() {
    return (
        <div>
            <div className="row mt-5">

            </div>
            <Router>
                <div className="mt-5 mb-5">
                    <Link to="/modeli" className="btn mr-5">Svi modeli</Link>
                    <Link to="/modeli/dodaj" className="btn ">Dodaj model</Link>
                    <Route exact path="/modeli" component={TabelaModeli}></Route>
                    <Route exact path="/modeli/dodaj" component={DodajModel}></Route> 
                </div>
            </Router> 
        </div>

    );
}

export default Index;
