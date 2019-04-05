import React, { Component } from 'react';

class Picture extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'green', width: 500, height: 400, margin: 10 }}>
                Picture:
            <div style={{ fontWeight: 600, textTransform: 'lowercase', fontSize: 20 }}>
                    {this.props.selected}
                </div>
            </div>
        );
    }
}

export default Picture;