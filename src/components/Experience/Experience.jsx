import React from 'react';
import screen1 from '../../assets/images/screens/screen1.png';
import screen2 from '../../assets/images/screens/screen2.png';
import screen3 from '../../assets/images/screens/screen3.png';

const Experience = () => {
    return (
        <div className="experience">
            <div className="expContainer">
                <div className="exp__description">
                    <div className="hWrap">
                        <h2>Seamless Ordering Experience</h2>
                    </div>
                    <div className="pWrap">
                        <p>
                            Increase your sales by 30% with a better checkout experience. Your
                            customers can place orders
                            {' '}
                            <br />
                            easily with a few taps on the item list
                        </p>
                    </div>
                </div>
            </div>

            <div className="imagesContainer">
                <div className="exp__images">
                    <div className="exp__imageWrap">
                        <img src={screen1} alt="screen" className="exp__image" />
                        <div className="exp__pointer">
                            <span>Select Items</span>
                        </div>
                    </div>
                    <div className="exp__imageWrap">
                        <img src={screen2} alt="screen" className="exp__image" />
                        <div className="exp__pointer">
                            <span>Review Order</span>
                        </div>
                    </div>
                    <div className="exp__imageWrap">
                        <img src={screen3} alt="screen" className="exp__image" />
                        <div className="exp__pointer">
                            <span>Send Order</span>
                        </div>
                    </div>
                </div>
                <div className="bgMask40" />
            </div>
        </div>
    );
};

export default Experience;
