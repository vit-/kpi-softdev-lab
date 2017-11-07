import React from 'react';
import axios from 'axios';

import Car from './Car'
import CarInfoModal from './CarInfoModal'

export default class CarGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [],
            modalShow: false,
            modalTitle: 'title',
            modalDescription: 'description',
            modalUrl: 'url'
        };
    }

    handleCarClick(e) {
        const car = e.target;
        const data = car.dataset;
        this.openModal(car.title, data.description, data.url);
    }

    openModal(title, description, url) {
        this.setState({
            modalShow: true,
            modalTitle: title,
            modalDescription: description,
            modalUrl: url
        });
    }

    closeModal() {
        this.setState({modalShow: false});
    }

    componentDidMount () {
        axios.get('/data.json').then(res => {
            const data = res.data;
            var cars = [];
            for (var i = 0; i < data.length; i++) {
                var car = data[i];
                cars.push(<Car carClick={this.handleCarClick.bind(this)} title={car.title} description={car.description} url={car.url} spriteUrl={car.spriteUrl} spriteArea={car.spriteArea} />);
            }
            this.setState({cars});
        });
    }

    render() {
        return (
            <div>
                {this.state.cars}
                <CarInfoModal show={this.state.modalShow} close={this.closeModal.bind(this)} title={this.state.modalTitle} description={this.state.modalDescription} url={this.state.modalUrl} />
            </div>
        );
    }
}
