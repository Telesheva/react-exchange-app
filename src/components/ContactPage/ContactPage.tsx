import React from "react";
import "./ContactPage.scss";
import {Layout} from "../index";
import instagram from '../../assets/images/instagram.svg';
import github from '../../assets/images/github.svg';
import gmail from '../../assets/images/gmail.svg';

const ContactPage = () => {
    return (
        <Layout>
            <div className="contact-page">
                <ul className="contact-page__list">
                    <li className="contact-page__item">
                        <strong>Address: Ukraine, Kharkiv, Nauky Avenue, 58</strong>
                    </li>
                    <li className="contact-page__item">
                        <strong>Phone numbers: </strong>
                        <ul>
                            <li>+380-95-501-45-87</li>
                            <li>+380-50-890-90-99</li>
                            <li>+380-97-743-21-10</li>
                        </ul>
                    </li>
                    <li className="contact-page__item">
                        <div className="contact-page__item_social">
                            <img src={instagram} alt="instagram-link"/>
                            <img src={github} alt="github-link"/>
                            <img src={gmail} alt="email-address"/>
                        </div>
                    </li>
                </ul>
            </div>
        </Layout>
    );
};

export default ContactPage;
