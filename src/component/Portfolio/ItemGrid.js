import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class ItemGrid extends Component {

        state = {
            activeItem: '*',
        }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');
    
        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });

        }); 

    }
    onFilterChange = (newFilter) => {
        
        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            layoutMode: "masonry"
            });
        }
    
    // this.iso.arrange({ filter: newFilter });
        
      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';
    render() {
        
        return(
            <div>
                <ul className="list_style portfolio_menu text-center">
                    <li className={`${this.onActive('*')}`} data-wow-delay="0.1s" data-filter="*" onClick={() => {this.onFilterChange("*")}}>SVE</li>
                    <li className={`${this.onActive('vodovod')}`} data-wow-delay="0.3s" data-filter="vodovod" onClick={() => {this.onFilterChange("vodovod")}}>Vodovod</li>
                    <li className={`${this.onActive(`kanalizacija`)}`} data-wow-delay="0.6s" data-filter="kanalizacija" onClick={()=> {this.onFilterChange("kanalizacija")}}>Kanalizacija</li>
                    <li className={`${this.onActive(`oprema`)}`} data-wow-delay="0.8s" data-filter="oprema" onClick={()=> {this.onFilterChange("oprema")}}>Oprema</li>
                </ul>	

                
                <div className="grid row">
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style">
                            <img src="/images/sve7.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style">
                            <img src="/images/sve2.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style">
                            <img src="/images/sve8.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style">
                            <img src="/images/sve4.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style">
                            <img src="/images/sve10.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item sve">
                        <div className="portfolio hover-style">
                            <img src="/images/sve9.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item vodovod">
                        <div className="portfolio hover-style">
                            <img src="/images/vodovod2.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item vodovod">
                        <div className="portfolio hover-style">
                            <img src="/images/vodovod3.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item vodovod">
                        <div className="portfolio hover-style">
                            <img src="/images/vodovod1.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item vodovod">
                        <div className="portfolio hover-style">
                            <img src="/images/vodovod4.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item vodovod">
                        <div className="portfolio hover-style">
                            <img src="/images/vodovod5.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item vodovod">
                        <div className="portfolio hover-style">
                            <img src="/images/vodovod6.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">VODOVOD</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item kanalizacija">
                        <div className="portfolio hover-style">
                            <img src="/images/kanalizacija1.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item kanalizacija">
                        <div className="portfolio hover-style">
                            <img src="/images/kanalizacija2.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item kanalizacija">
                        <div className="portfolio hover-style">
                            <img src="/images/kanalizacija6.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item kanalizacija">
                        <div className="portfolio hover-style">
                            <img src="/images/kanalizacija4.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item kanalizacija">
                        <div className="portfolio hover-style">
                            <img src="/images/kanalizacija5.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item kanalizacija">
                        <div className="portfolio hover-style">
                            <img src="/images/kanalizacija6.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">KANALIZACIJA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item oprema">
                        <div className="portfolio hover-style">
                            <img src="/images/Poslovni objekat 1.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item oprema">
                        <div className="portfolio hover-style">
                            <img src="/images/Poslovni objekat 7.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item oprema">
                        <div className="portfolio hover-style">
                            <img src="/images/Poslovni objekat 3.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item oprema">
                        <div className="portfolio hover-style">
                            <img src="/images/Poslovni objekat 6.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item oprema">
                        <div className="portfolio hover-style">
                            <img src="/images/Poslovni objekat 5.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 grid-item oprema">
                        <div className="portfolio hover-style">
                            <img src="/images/Poslovni objekat 4.png" alt=""/>
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">OPREMA</h6>
                                </div>
                            </div>						
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
  }

  export default ItemGrid;
