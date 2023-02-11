import React, { useEffect } from "react";

import "../Style/Contact.css"
import { imgSrc } from "./../App"

import { bounce } from "../../textAnimation"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

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
                        <p>
                            <img src={imgSrc + "call.svg"} alt="call logo" />
                            <span>
                                <a href="tel:+918888468328" target={"_blank"} rel="noreferrer">
                                    +91 8888468328
                                </a>
                            </span>
                        </p>
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
                    <div className="socialMedia">
                        <a href="https://github.com/sumitkawale" target={"_blank"} rel="noreferrer">
                            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "github.svg"} alt="github_icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/sumit-kawale/" target={"_blank"} rel="noreferrer">
                            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "linkedin.svg"} alt="linkedin_icon" />
                        </a>
                        <a href="https://twitter.com/SumitKawale18/" target={"_blank"} rel="noreferrer">
                            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "twitter.svg"} alt="twitter_icon" />
                        </a>
                        <a href="https://discord.com/users/sumitkawale#7825" target={"_blank"} rel="noreferrer">
                            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "discord.svg"} alt="discord_icon" />
                        </a>
                        <a href="https://www.instagram.com/sumitkawale1/" target={"_blank"} rel="noreferrer">
                            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "instagram.svg"} alt="instagram_icon" />
                        </a>
                    </div>
                </div>
                <hr />

            </div>
            <div className="contactMeForm">
                <form>
                    <FormControl sx={{ my: 2, width: '48%' }} className="inputControl" variant="filled">
                        <TextField id="filled-basic" label="Your Name" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ my: 2, width: '48%' }} className="inputControl" variant="filled">
                        <TextField id="filled-basic" label="E-Mail Address" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ my: 2, width: '98%' }} variant="filled">
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </FormControl>
                    <Button onClick={() => { alert("I'm developing this site. Response taking is not implemented yet.") }} sx={{ my: 2 }} style={{ color: "#323330", fontSize: "1.1em", background: "#f7df1e", borderColor: "#f7df1e" }} variant="outlined">Send</Button>
                </form>
            </div>
        </div>
    </div>
}

export default Contact