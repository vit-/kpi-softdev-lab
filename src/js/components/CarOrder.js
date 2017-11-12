import React from 'react';

import { Button, ControlLabel, Col, Checkbox, Form, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';

import '../../css/carOrder.css';

export default class CarOrder extends React.Component {
    constructor(props) {
        super(props);
        this.cars = {
            'Audi': ['A4', 'A5', 'A6', 'TT'],
            'BMW': ['X1', 'X3', 'X5', 'X6']
        };
        this.state = {
            name: null,
            tel: '',
            make: '',
            model: '',
            tos: ''
        };
    }

    renderLabel(title, required) {
        var className = '';
        if (required === true) {
            className = 'required'
        }
        return (
            <Col componentClass={ControlLabel} className={className} sm={2}>{title}</Col>
        );
    }

    renderMakeOptions() {
        var opts = [(<option>...</option>)];
        for (var make in this.cars) {
            opts.push(<option value={make}>{make}</option>);
        }
        return opts;
    }

    renderModelOptions() {
        var opts = [];
        const car = this.cars[this.state.make];
        if (car) {
            for (var i in car) {
                const model = car[i];
                opts.push(<option value={model}>{model}</option>);
            }
        } else {
            opts.push(<option>Select Make first</option>);
        }
        return opts;
    }

    handleChange(e) {
        var stateObj = {};
        stateObj[e.target.dataset.field] = e.target.value;
        this.setState(stateObj);
    }

    handleCheckboxChange(e) {
        var stateObj = {};
        stateObj[e.target.dataset.field] = e.target.checked;
        this.setState(stateObj);
    }

    validateName() {
        if (this.state.name == '') {
            return 'error';
        }
    }

    validateTel() {
        if (this.state.tel) {
            const dig = this.state.tel.slice(15);
            if (isNaN(parseInt(dig))) {
                return 'error';
            }
        }
    }

    validateForm() {
        // this method is used with `disabled={}` attr
        // thus it is an inverse method. Returns `false` when form IS valid
        const telIsValid = (this.validateTel() != 'error') && this.state.tel;
        const nameIsValid = (this.validateName() != 'error') && this.state.name;
        if (telIsValid && nameIsValid && this.state.tos) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup validationState={this.validateName()}>
                    {this.renderLabel('Name', true)}
                    <Col sm={5}>
                        <FormControl type='text' placeholder='First Name' data-field='name' onChange={this.handleChange.bind(this)} />
                    </Col>
                    <Col sm={5}>
                        <FormControl type='text' placeholder='Last Name' />
                    </Col>
                </FormGroup>

                <FormGroup validationState={this.validateTel()}>
                    {this.renderLabel('Tel', true)}
                    <Col sm={10}>
                        <MaskedFormControl type='text' placeholder='+380' mask='+38011 111 11 11' data-field='tel' onChange={this.handleChange.bind(this)} />
                    </Col>
                </FormGroup>

                <FormGroup>
                    {this.renderLabel('Preferred Car')}
                    <Col sm={5}>
                        <FormControl componentClass="select" placeholder="Make" data-field='make' onChange={this.handleChange.bind(this)}>
                            {this.renderMakeOptions()}
                        </FormControl>
                    </Col>
                    <Col sm={5}>
                        <FormControl componentClass="select" placeholder="Model">
                            {this.renderModelOptions()}
                        </FormControl>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={5}>
                        <Checkbox className='required' data-field='tos' onChange={this.handleCheckboxChange.bind(this)}>I agree with the Terms of Service</Checkbox>
                    </Col>
                    <Col sm={5}>
                        <Button type='submit' bsStyle='success' disabled={this.validateForm()}>Order</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
