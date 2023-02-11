import React, { useState, useEffect } from 'react'

import "./App.css"
import aboutDataDefault from "../defaultData/aboutDataDefault"
import projectsDataDefault from "../defaultData/projectsDataDefault"

import Header from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact'

let ip = "13.234.119.204";
ip = "localhost";
// ip = "192.168.0.107";

const serverURL = "http://" + ip + ":2324/sumitkawale";
const imgSrc = "https://sumitkawale.github.io/sumitkawale.web.media.github.io/";

function App() {

    const [aboutData, updateAboutData] = useState(aboutDataDefault);
    const [projectsData, updateProjectsData] = useState(projectsDataDefault);

    useEffect(() => {
        fetch(serverURL + "/about")
            .then(d => d.json())
            .then(d => updateAboutData(d))
            .catch(e => updateAboutData(aboutDataDefault));

        fetch(serverURL + "/projects")
            .then(d => d.json())
            .then(d => updateProjectsData(d))
            .catch(e => updateProjectsData(projectsDataDefault));
    }, [])

    return <div className='app'>
        <Header />

        <section id='oneHome'>
            <Home />
        </section>

        <section>
            <About value={aboutData} />
        </section>

        <section>
            <Projects value={projectsData} />
        </section>

        {/* ------------------ */}
        {/* <section>
            <div style={{ height: "200vh" }}>
            </div>
        </section> */}

        <section>
            <Contact />
            <img src={imgSrc + "endWave.svg"} alt="wave" />
        </section>
    </div>
}

export default App;

export { serverURL, imgSrc }
