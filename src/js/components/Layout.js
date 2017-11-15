import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './About';
import CarGallery from './CarGallery';
import CarOrder from './CarOrder';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
    render() {
        return (
            <Router>
            <div className='container'>
                <Header />
                <main className='body'>
                    <Route exact path='/' component={CarGallery} />
                    <Route path='/carorder' component={CarOrder} />
                    <Route path='/about' component={About} />
                </main>
                <Footer />
            </div>
            </Router>
        );
    }
}
