import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

import './css/Index.css'

function Index() {
    return (

        <div className="container">
        <Header></Header>

        <Footer></Footer> 
        </div>

    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
