import React from 'react';

import About from './About';
import CarGallery from './CarGallery';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <main className='body'>
                    <About />
                </main>
                <Footer />
            </div>
        );
    }
}
