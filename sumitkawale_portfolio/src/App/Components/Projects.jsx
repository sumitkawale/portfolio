import React from "react";
import parse from 'html-react-parser';
import { Link } from 'react-router-dom'

import { imgSrc } from "../App"

import "../Style/Projects.css";

const Project = (props) => {
    return <div className="project">
        {!props.reverse ? <img src={props.cardImg} className="onResponsiveHide" alt="project" /> : ""}
        <img src={props.cardImg} className="onResponsive" alt="project" />
        <div className="reverse">
            <span>
                <h2>{parse(props.title)}</h2>
                <h5>{parse(props.category)}</h5>
                <br />
                <br />
                <p>
                    {parse(props.description)}
                </p>
                <br />
                <span className={`technologies ${props.technologies.length > 3 ? "space-around" : ""}`}>
                    {
                        props.technologies?.map((v, i) => {
                            return <img key={props.id + "_technology" + i} src={v.iconLink} alt={v.name} />
                        })
                    }
                </span>
                <br />
                {/* eslint-disable-next-line */}
                <Link to={"/project/" + props.idTxt}>View More Details</Link>
                {props.outputLink && <a href="/" target={"_blank"}>Output</a>}
                {props.githubLink && <a href="/" target={"_blank"}>GitHub</a>}
            </span>
        </div>
        {props.reverse ? <img src={props.cardImg} className="onResponsiveHide" alt="project" /> : ""}
    </div>
}

function Projects(props) {
    let data = props.value;

    return <div id="projectsParent">
        <div className='mainTitle title'><h1>Projects</h1><span></span><span></span></div>

        <br />
        <div id="projects">
            {
                data ? data?.map((v, i) => {
                    if (v.id) return <Project
                        id={v.id}
                        idTxt={v.id}
                        key={i + "project" + v.id}
                        cardImg={v.cardImg ? imgSrc + v.cardImg : imgSrc + "projectsImages/project" + ((i % 2) + 1) + ".png"}
                        reverse={i % 2 !== 0}
                        title={v.title}
                        category={v.category}
                        description={v.description}
                        technologies={v.technologies}
                        outputLink={v.outputLink}
                        githubLink={v.githubLink}
                    />;
                    else return "";
                }) : "-problem to show projects-"
            }
        </div>
    </div>
}

export default Projects;