import React, { Component } from 'react';

class Information extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'pink', width: 750, height: 400, margin: 10 }}>
                Name:
                <div style={{ fontWeight: 600, textTransform: 'lowercase', fontSize: 20 }}>{this.props.selected}</div>
                {/* <button onClick={this.props.changeColor(this.state.selected)}>Change Color</button> */}
            </div>
        );
    }
}

export default Information;