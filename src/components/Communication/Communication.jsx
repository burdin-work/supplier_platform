import React, { useState } from 'react';
import imgBefore from '../../assets/images/communication/Before.png';
import Animation from './Animation';

const Communication = () => {
    const [after, setAfter] = useState(false);

    return (
        <div className="communication">

            <div className="switcher">
                <div className="switcher__box">
                    <h2>Communication</h2>
                    <button
                        type="button"
                        className={`before${!after ? ' active' : ''}`}
                        onClick={() => setAfter(false)}
                    >
                        before
                    </button>
                    <button
                        type="button"
                        className={`after${after ? ' active' : ''}`}
                        onClick={() => setAfter(true)}
                    >
                        after
                    </button>
                </div>
            </div>

            <div className="graphics">
                {after
                    ? (
                        <div className="afterWrap">
                            <Animation />
                        </div>
                    )
                    : (
                        <div className="beforeWrap">
                            <img
                                src={imgBefore}
                                alt="before"
                                className="before"
                            />
                        </div>
                    )}
            </div>

            <div className="info">
                {after
                    ? (
                        <div className="info__box">
                            <h4>Order of new reality</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing ipsum elit.
                                Amet,
                                consectetur adipisicing elit.
                            </p>
                        </div>
                    )
                    : (
                        <div className="info__box">
                            <h4>Old-School Chaos</h4>
                            <p>
                                Unstructured orders across multiple apps
                                {' '}
                                <br />
                                and inboxes. New message
                                notifications and alerts every few minutes
                            </p>
                        </div>
                    )}
            </div>
            <div className="bgMask25" />
        </div>
    );
};

export default Communication;
