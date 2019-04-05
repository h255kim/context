import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class Selections extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'grey', height: 65 }}>
                <div style={{ margin: 10 }}>
                    <Button
                        color={this.props.cosmosStyle}
                        style={{ fontWeight: 600, textTransform: 'lowercase', fontSize: 20 }}
                        onClick={this.props.setToCosmos}>{this.props.cosmos}</Button>
                    <Button
                        color={this.props.tulipStyle}
                        style={{ fontWeight: 600, textTransform: 'lowercase', fontSize: 20 }}
                        onClick={this.props.setToTulip}>{this.props.tulip}</Button>
                    <Button
                        color={this.props.cactusStyle}
                        style={{ fontWeight: 600, textTransform: 'lowercase', fontSize: 20 }}
                        onClick={this.props.setToCactus}>{this.props.cactus}</Button>
                </div>
            </div>
        );
    }
}

export default Selections;