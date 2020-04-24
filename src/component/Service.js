import React, {Component} from 'react';
import Sectiontitle from '../component/Banner/Sectiontitle';
import Fade from 'react-reveal/Fade';

class Service extends Component{
    render(){
        let jhonData = this.props.jhonData;
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                    <Sectiontitle Title="Servisi" TitleP="-  Ukratko o našim servisima -"/>
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            {
                                jhonData.service && jhonData.service.map(item =>{
                                return(
                                        <div className="col-lg-4 col-sm-6" key={item.id}>
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                                <div className="border border-dark rounded-circle align-items-center mb-2">
                                                    <img src={item.iconSource} alt="icon" className="pt-3"/>
                                                </div>
                                                <h2 className="t_color custom-margin">{item.serviceTitle}</h2>
                                                <p>{item.sDetails}</p>
                                            </div>
                                        </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Service;