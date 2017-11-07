import React from 'react';

import { Modal, Button } from 'react-bootstrap';

export default class CarInfoModal extends React.Component {
    render() {
        return (
            <Modal bsSize='large' show={this.props.show} onHide={this.props.close}>
                <Modal.Header>
                    <Modal.Title>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <div className='row'>
                            <div className='col-md-12'>
                                    <img className='col-lg-12 col-md-12 col-xs-12' src={this.props.url} title={this.props.title} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='description'>
                                    {this.props.description}
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
