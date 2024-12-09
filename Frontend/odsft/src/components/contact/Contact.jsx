import React from 'react';
import './Contact.css'; 


import Header from '../header/Header';
import Footer from '../footer/Footer';

const Contact = () => {
    return (
           <>
       

        <section className="contact section" id="contact">
            <div className="container flex-center">
                <h1 className="section-title-01">CONTACT US</h1>
                <h2 className="section-title-02">GET &nbsp;IN &nbsp;TOUCH</h2>
                <div className="content">
                    <div className="contact-left">
                        <h1>Helpline</h1>
                        <ul className="contact-list">
                           
                                <h2 className="item-title">
                                    Phone:
                                </h2>
                                <span>+91-11-41838382</span>
                           
                           
                                <h2 className="item-title">
                                    Toll Free Number:
                                </h2>
                                <span>1800-120-3648</span>
                            
                            
                                <h2 className="item-title">
                                  Email:
                                </h2>
                                <span>
                                    <a href="mailto:info@organindia.org">info@organindia.org</a>
                                </span>
                           
                           
                        </ul>
                    </div>

                    <div className="contact-right">
                        <p>Leave Your Message</p>
                        <div className="container">
                            <form className="contact-form">
                                <div className="first-row">
                                    <input type="text" name="name" placeholder="Name" required />
                                </div>
                                <div className="second-row">
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className="third-row">
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </div>
                                <div className="fourth-row">
                                    <textarea name="message" placeholder="Message" rows="7" required></textarea>
                                </div>
                                <button className="btn" type="submit">
                                    Send &nbsp;Message &nbsp;&nbsp;<i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

        </>
    );
};

export default Contact;