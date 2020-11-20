import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/animation.json';

class Animation extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };

        return (
            <div className="animationWrap">
                <Lottie options={defaultOptions} />
            </div>
        );
    }
}

export default Animation;
