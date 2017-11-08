import React from 'react';

import { Modal, Button, Carousel, Row, Col } from 'react-bootstrap';

export default class CarInfoModal extends React.Component {
    getItems() {
        const carsData = this.props.carsData
        var items = [];
        for (var i = 0; i < carsData.length; i++) {
            const car = carsData[i];
            items.push(
                <Carousel.Item>
                    <img className='col-lg-12 col-md-12 col-sm-12' src={car.url} title={car.title} />
                </Carousel.Item>
            );
        }
        return items;
    }

    getCar() {
        const index = this.props.carIndex;
        const carsData = this.props.carsData;
        if (index < carsData.length) {
            return carsData[index];
        }
        // return dummy data to avoid exception
        return {
            title: 'Title',
            description: 'Description'
        }
    }

    render() {
        return (
            <Modal bsSize='large' show={this.props.show} onHide={this.props.close}>
                <Modal.Body>
                    <Modal.Header>
                       <Modal.Title>
                           {this.getCar().title}
                       </Modal.Title>
                   </Modal.Header>
                    <Carousel activeIndex={this.props.carIndex} onSelect={this.props.onSelect} indicators={false}>
                        {this.getItems()}
                    </Carousel>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            {this.getCar().description}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
