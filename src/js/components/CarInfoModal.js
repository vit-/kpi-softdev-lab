import React from 'react';

import { Modal, Button } from 'react-bootstrap';

export default class CarInfoModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header>
                    <Modal.Title>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <img className='col-md-12 picture' src={this.props.url} title={this.props.title} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='description'>
                                    {this.props.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
