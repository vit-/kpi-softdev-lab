import React from 'react';
import axios from 'axios';

import { Grid, Row, Col, Image, Well } from 'react-bootstrap';

import '../../css/about.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                aboutMe: 'Software Engineer',
                group: 'IKz-41',
                currentLocation: 'Kyiv, Ukraine',
                name: 'Vitalii Vokhmin',
                imageUrl: 'https://secure.gravatar.com/avatar/cb8872730f69c04a3295c0a266d91d3a?s=300'
            }
        };
    }

    renderRow(title, value) {
        return (
            <Row>
                <Col lg={4} md={4} sm={4} xs={4} className='lbl'><p>{title}</p></Col>
                <Col>{value}</Col>
            </Row>
        );
    }

    render() {
        return (
            <Grid className='about'>
                <Col lg={4} md={4} sm={4} xs={12} align='center'>
                    <Image thumbnail src={this.state.profile.imageUrl} />
                </Col>
                <Col lg={8} md={8} sm={8} xs={12}>
                    {this.renderRow('Name', this.state.profile.name)}
                    {this.renderRow('Group', this.state.profile.group)}
                    {this.renderRow('Location', this.state.profile.currentLocation)}
                    {this.renderRow('About', this.state.profile.aboutMe)}
                </Col>
            </Grid>
        );
    }
}
