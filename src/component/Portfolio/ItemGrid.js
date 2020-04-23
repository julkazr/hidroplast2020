import React, {Component} from 'react';
import GalleryAll from './GalleryAll';
import GalleryWater from './GalleryWater';
import GalleryEquipment from './GalleryEqiupment';
import GallerySewage from './GallerySewage';

class ItemGrid extends Component {

    state = {
        activeItem: '*',
    }

    onFilterChange = (newFilter) => {
        
        this.setState({activeItem: newFilter});
       
    }

    fillGallery() {
        if(this.state.activeItem === '*' || this.state.activeItem === 'sve') {
            return <GalleryAll />
        } else if(this.state.activeItem === 'vodovod') {
            return <GalleryWater />
        } else if(this.state.activeItem === 'kanalizacija') {
            return <GallerySewage />
        } else if(this.state.activeItem === 'oprema') {
            return <GalleryEquipment />
        }
    }

    render() {
        const images = this.fillGallery();
        return(
            <div>
                <ul className="list_style portfolio_menu text-center">
                    <li className={(this.state.activeItem === '*' || this.state.activeItem === 'sve') ? 'active' : ''} data-wow-delay="0.1s" onClick={() => {this.onFilterChange("sve")}}>SVE</li>
                    <li className={this.state.activeItem === 'vodovod' ? 'active' : ''} data-wow-delay="0.3s" onClick={() => {this.onFilterChange("vodovod")}}>Vodovod</li>
                    <li className={this.state.activeItem === 'kanalizacija' ? 'active' : ''} data-wow-delay="0.6s" onClick={()=> {this.onFilterChange("kanalizacija")}}>Kanalizacija</li>
                    <li className={this.state.activeItem === 'oprema' ? 'active' : ''} data-wow-delay="0.8s" onClick={()=> {this.onFilterChange("oprema")}}>Oprema</li>
                </ul>
                <div className="container">
                    {images}
                </div>	
            </div>
        )
    }
  }

  export default ItemGrid;
