import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class GallerySewage extends Component {
    render() {
        return(
            <Fade left>
                <div className="grid row">
                    <div className="col-md-4 col-sm-6 col-xs-12 grid-item kanalizacija">
                        <div className="portfolio hover-style my-5">
                            <img src="/images/kanalizacija1.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-5">
                            <img src="/images/kanalizacija3.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-5">
                            <img src="/images/kanalizacija4.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-6 col-xs-12 grid-item kanalizacija">
                        <div className="portfolio hover-style my-4">
                            <img src="/images/kanalizacija2.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-4">
                            <img src="/images/kanalizacija5.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-4">
                            <img src="/images/kanalizacija6.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                </div>
            </Fade>
);
    }
}

export default GallerySewage;