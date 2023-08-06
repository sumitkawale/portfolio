import { useEffect } from "react";

import "../Style/Contact.css"
import { imgSrc } from "./../App"

import SocialMedia from "./SocialMedia";

const Contact = () => {

    useEffect(() => {
    }, [])

    return <div id="contactParent">
        <div className='mainTitle'><h1>Contact Me</h1><span></span><span></span></div>

        <div id="contact">
            <div className="contactMeSocial">
                <div>
                    <h2>Contact</h2>
                    <div className="contact">
                        <p>
                            <img src={imgSrc + "gmail.svg"} alt="gmail logo" />
                            <span>
                                <a href="mailto:sumitkawale2002@gmail.com" target={"_blank"} rel="noreferrer">
                                    sumitkawale2002@gmail.com
                                </a>
                            </span>
                        </p>
                        {/* <p>
                            <img src={imgSrc + "call.svg"} alt="call logo" />
                            <span>
                                <a href="tel:+918888468328" target={"_blank"} rel="noreferrer">
                                    +91 8888468328
                                </a>
                            </span>
                        </p> */}
                        <p>
                            <img src={imgSrc + "whatsapp.svg"} className="whatsappImage" alt="whatsapp logo" />
                            <span>
                                <a href="https://wa.me/919021368015" target={"_blank"} rel="noreferrer">
                                    +91 9021368015
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
                <div>
                    {/* <h2>Social Media</h2> */}
                    <SocialMedia />
                </div>
                <hr />

            </div>
            <div className="contactMeForm">
                <form>
                    <img alt="programmer png" src={"/programmer.png"} style={{ width: "450px", mixBlendMode: "darken" }} />
                </form>
            </div>
        </div>
    </div>
}

export default Contact