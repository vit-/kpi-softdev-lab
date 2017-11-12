import React from 'react';

import About from './About';
import CarGallery from './CarGallery';
import CarOrder from './CarOrder';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <main className='body'>
                    <CarOrder />
                </main>
                <Footer />
            </div>
        );
    }
}
