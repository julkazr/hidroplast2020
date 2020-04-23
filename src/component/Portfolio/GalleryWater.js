import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class GalleryWater extends Component {
    render() {
        return(
            <Fade right>
                <div className="grid row">
                    <div className="col-md-7 col-sm-6 col-xs-12 grid-item vodovod">
                        <div className="portfolio hover-style my-2">
                            <img src="/images/vodovod1.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-2">
                            <img src="/images/vodovod2.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-2">
                            <img src="/images/vodovod6.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 grid-item vodovod">
                        <div className="portfolio hover-style my-5">
                            <img src="/images/vodovod3.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-5">
                            <img src="/images/vodovod5.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-5">
                            <img src="/images/vodovod4.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default GalleryWater;