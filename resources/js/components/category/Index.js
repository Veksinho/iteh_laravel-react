import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Add from './Add';
import Listing from './Listing'


function Index() {
    return (
        <div>
            <Router>
                <div>
                    <Link to="/category/add" className="btn btn-success">Add</Link>
                    <Link to="/category" className="btn btn-success">Listing</Link>
                    <Route exact path="/category/add" component={Add}></Route>
                    <Route exact path="/category" component={Listing}></Route> 
                </div>
            </Router> 
        </div>

    );
}

export default Index;
