import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class GalleryEquipment extends Component {
    render() {
        return(
            <Fade right>
                <div className="grid row">
                    <div className="col-md-7 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style my-4">
                            <img src="/images/poslovni-objekat5.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-4">
                            <img src="/images/poslovni-objekat6.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style my-2">
                            <img src="/images/poslovni-objekat1.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-2">
                            <img src="/images/poslovni-objekat7.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-2">
                            <img src="/images/poslovni-objekat3.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-2">
                            <img src="/images/poslovni-objekat4.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                        <div className="portfolio hover-style my-2">
                            <img src="/images/poslovni-objekat2.png" alt=""/>
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
    
export default GalleryEquipment;