import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
      
        return(
            <section className="footer-area sect-pad">
                <div className="container">
                    <div className="footer-content">
                        <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s">
                            <img src={require('../image/logo_HP.png')} alt=""/>
                        </Link>
                        
                        {/* <h6>Made with love by <a href="https://themeforest.net/user/dreemsthemes">Dreemsthemes</a></h6> */}
                        <p>© 2020 Hidroplast</p>
                        {/* <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p> */}
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;