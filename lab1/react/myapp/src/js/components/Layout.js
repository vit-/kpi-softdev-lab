import React from 'react';

import CarGallery from './CarGallery';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <CarGallery />
                <Footer />
            </div>
        );
    }
}
