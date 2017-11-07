import React from 'react';

export default class Car extends React.Component {
    render() {
        var divStyle = {
            background: 'url(' + this.props.spriteUrl + ') no-repeat top left',
            backgroundPosition: this.props.spriteArea
        };
        return (
            <div className='row col-lg-4 col-md-4 col-sm-6'>
                <a onClick={this.props.carClick}>
                    <div className='carSprite' style={divStyle} data-url={this.props.url} title={this.props.title} data-description={this.props.description}>
                    </div>
                </a>
            </div>
        );
    }
}
