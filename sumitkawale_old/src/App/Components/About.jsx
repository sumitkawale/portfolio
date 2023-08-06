import React, { useEffect } from 'react'

import "../Style/About.css"

import AboutSelf from './AboutComponents/Self'
import Education from './AboutComponents/Education'
import Skills from './AboutComponents/Skills';
import CurrentStatus from './AboutComponents/CurrentStatus';
import Experience from './AboutComponents/Experience';

///////////////////////
import { imgSrc } from '../App';

function About(props) {
    useEffect(() => {
        const tabChange = (event) => {
            const tabFor = event.target.getAttribute("data-for");
            const tabs = Array(...event.target.parentNode.children)

            tabs.forEach(tab => {
                const tabFor = tab.getAttribute("data-for");
                // deactivating all tabs
                document.getElementById(tabFor).classList.add("display-none");
                tab.classList.remove("active");
            })

            event.target.classList.add("active");
            document.getElementById(tabFor).classList.remove("display-none");

            ////////////////////////////////////////
            const activeBars = document.querySelectorAll(".activeBar");
            activeBars.forEach(activeBar => {
                const activeBarParent = event.target.parentNode.parentNode;
                if (activeBarParent.getAttribute("data-id") === activeBar.getAttribute("data-for")) {
                    const domReact = event.target.getBoundingClientRect();
                    activeBar.style.width = domReact.width + "px"
                    activeBar.style.left = (domReact.left - activeBarParent.offsetLeft) + "px"
                }
            })
        }

        function ripple(e) {
            let { clientX, clientY, target } = e;
            const offsetTop = target.getBoundingClientRect().top;
            const offsetLeft = target.getBoundingClientRect().left;
            [clientX, clientY] = [clientX - offsetLeft, clientY - offsetTop];

            let ripple = document.createElement("span");
            ripple.style.left = clientX + "px";
            ripple.style.top = clientY + "px";

            target.appendChild(ripple);

            setTimeout((element, ripple) => {
                element.removeChild(ripple);

            }, 1000, target, ripple);
        }

        const tabButtons = document.querySelectorAll(".tabButtons")
        tabButtons.forEach(tabButton => { // getting all multiple tabBars
            const tabs = Array(...tabButton.children) // getting all tabs from tabBars
            tabs.forEach(tab => {
                tab.addEventListener("click", (e) => {
                    tabChange(e);
                    ripple(e);
                })

                // activating all tabs
                if (tab.classList.contains("active")) tab.click();
            })
        });
    }, [props])

    let aboutData = props.value;

    return <div id="aboutParent" className='old'>
        <div className='mainTitle'><h1>About </h1><span></span><span></span></div>
        <div id="about">
            <img className='skImage' src={imgSrc + aboutData.self.profilePhoto} alt="My Pic" />
            <div className="aboutTabs">
                <div className="tabBar">
                    <div className="tabHeader">
                        <div className="tabButtons">
                            <button className="active" data-for="Self">Self</button>
                            <button data-for="Education">Education</button>
                            <button data-for="CurrentStatus">Current Status</button>
                            <button data-for="Skills">Skills</button>
                            <button data-for="Experience">Experience</button>
                        </div>
                        <span className="activeBar"></span>
                    </div>
                    <div className="tabContent">
                        <div id="Self" className="display-none">
                            <br />
                            <AboutSelf value={aboutData.self} />
                        </div>
                        <div id="Education" className="display-none">
                            <br />
                            <Education value={aboutData.education} />
                        </div>
                        <div id="CurrentStatus" className="display-none">
                            <br />
                            <CurrentStatus value={aboutData.currentStatus} />
                        </div>
                        <div id="Skills" className="display-none">
                            <br />
                            <Skills value={aboutData.skills} />
                        </div>
                        <div id="Experience" className="display-none">
                            <br />
                            <Experience value={aboutData.experience} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default About;