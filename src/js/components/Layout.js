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
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={CarGallery} />
                    <Route exact path={process.env.PUBLIC_URL + '/carorder'} component={CarOrder} />
                    <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
                </main>
                <Footer />
            </div>
            </Router>
        );
    }
}
