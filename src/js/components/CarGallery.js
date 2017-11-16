import React from 'react';
import axios from 'axios';

import Car from './Car'
import CarInfoModal from './CarInfoModal'

export default class CarGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carsData: [],
            cars: [],
            modalShow: false,
            modalCarIndex: 0
        };
    }

    handleCarClick(e) {
        this.setState({
            modalShow: true,
            modalCarIndex: parseInt(e.target.dataset.index)
        });
    }

    handleCarouselSelect(selectedIndex, e) {
        this.setState({
            modalCarIndex: selectedIndex
        });
    }

    closeModal() {
        this.setState({modalShow: false});
    }

    componentDidMount () {
        axios.get(process.env.PUBLIC_URL + '/data.json').then(res => {
            const carsData = res.data;
            var cars = [];
            for (var i = 0; i < carsData.length; i++) {
                const car = carsData[i];
                cars.push(<Car carClick={this.handleCarClick.bind(this)} title={car.title} carIndex={i} spriteUrl={car.spriteUrl} spriteArea={car.spriteArea} />);
            }
            this.setState({cars, carsData});
        });
    }

    render() {
        return (
            <div>
                {this.state.cars}
                <CarInfoModal show={this.state.modalShow} close={this.closeModal.bind(this)} carsData={this.state.carsData} carIndex={this.state.modalCarIndex} onSelect={this.handleCarouselSelect.bind(this)} />
            </div>
        );
    }
}
