import React, { Component } from 'react';

import Picture from './Picture';
import Information from './Information';

class Home extends Component {

    // getInfo = () => {
    //     this.props.data.map((flower) => {
    //         if (flower.name === this.props.selected) {
    //             console.log('get info');
    //             console.log('flower name: ', flower.name);
    //             console.log('flower picture: ', flower.picture)
    //             return <div>
    //                 <Picture flowerPicture={flower.picture} />
    //                 <Information flowerName={flower.name} />
    //             </div>
    //         }
    //     }
    //     )}

    render() {
        return (
            <div style={{ backgroundColor: 'white', height: 480 }}>
                Home
            <div style={{ display: 'flex' }}>
                    {/* {this.getInfo()} */}
                    <Picture selected={this.props.selected} />
                    <Information selected={this.props.selected}
                    // changeColor={this.props.changeColor()}
                    />
                </div>
            </div>
        );
    }
}

export default Home;

