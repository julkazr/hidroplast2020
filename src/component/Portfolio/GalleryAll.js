import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class GalleryAll extends Component {
    render() {
        return(
            <Fade left>
                <div className="grid row card-columns">
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style my-4">
                            <img src="/images/sve1.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-4">
                            <img src="/images/sve2.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-4">
                            <img src="/images/sve10.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-4">
                            <img src="/images/sve5.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style my-3">
                            <img src="/images/sve4.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-3">
                            <img src="/images/sve3.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style my-4">
                            <img src="/images/sve6.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-4">
                            <img src="/images/sve7.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-4">
                            <img src="/images/sve8.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-4">
                            <img src="/images/sve9.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default GalleryAll;