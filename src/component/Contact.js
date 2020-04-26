import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';

class Contact extends Component {
    render(){
        let jhonData = this.props.jhonData;
        console.log(jhonData.contact);
        return(
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row row-reverse">
                        {
                            jhonData.contact && jhonData.contact.map(item =>{
                            return(
                                    <React.Fragment key={item.id}>
                                        <div className="col-lg-5">
                                            <Reveal effect="fadeInLeft" duration={500}>
                                                <div className="contact_info">
                                                    <h4>{item.title}</h4>
                                                    <ul className="nav">
                                                        {
                                                            item.menuItems.map(info =>{
                                                                return(
                                                                    <li className="item" key={info.id}>
                                                                        <div className="media">
                                                                            <span>
                                                                                <i className={info.icon}></i>
                                                                            </span>
                                                                            <div className="media-body">
                                                                                <span>{info.text}</span> 
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </Reveal>
                                        </div>
                                    </React.Fragment>
                                    )
                                }
                            )
                        }
                        <div className="col-md-7">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="input_form">
                                    <h4>{jhonData.contact[0].contentTitle}</h4>
                                    <p>{jhonData.contact[0].content}</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Contact;