import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import parse from "html-react-parser"
import GitHubIcon from '@mui/icons-material/GitHub';
import { ScrollLink } from "./NavBar";
import LaunchIcon from '@mui/icons-material/Launch';
import NavBar, { gotoTop } from "./NavBar";
import projectsDataDefault from "../../defaultData/projectsDataDefault"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from "./AboutComponents/CurrentStatus"
import { serverURL } from "../App";

import "../Style/ProjectDetail.css"

const ProjectDetail = (props) => {
    const [loader, showLoader] = useState("display-block");
    const [projectsData, updateProjectsData] = useState(projectsDataDefault);

    useEffect(() => {
        gotoTop();
        setTimeout(() => {
            showLoader("display-none");
        }, 1000);

        fetch(serverURL + "data/projectsData.json")
            .then(d => d.json())
            .then(d => updateProjectsData(d))
            .catch(e => updateProjectsData(projectsDataDefault));
    }, []);

    const params = useParams();
    let projectData = projectsData.filter((data) => {
        if (data.id === params.projectIDTXT) {
            return true;
        } return false;
    })[0];

    return <>
        <NavBar link={true} />

        <div className={`loader ${loader}`}>
            <div className="dominoes"><div></div><div></div><div></div><div></div><div></div></div>
            <span>
                please be patience
            </span>
        </div>

        <div id="projectDetailsParent">
            <div className="project-container">
                <ScrollLink htmlFor="navbarResponsiveBtn" link={true} to={"projectsParent"}>
                    <button className="backBtn"><ArrowBackIcon /></button>
                </ScrollLink>

                <div className="project-header">
                    <h1 className="project-title"> {parse(projectData.title)} </h1>
                    <div className="project-languages">
                        {projectData.technologies.map((technology, i) => {
                            return <span key={i + "screenshot"}>{technology.name}</span>
                        })}
                    </div>
                    <div className="project-links">
                        {projectData.data.github && <a href={projectData.data.github} target={"_blank"} rel="noreferrer"> <GitHubIcon /> &nbsp; GitHub </a>}
                        {projectData.data.project && <a href={projectData.data.project} target={"_blank"} rel="noreferrer"> <LaunchIcon /> &nbsp; Open Project </a>}
                    </div>
                </div>
                <div className="project-point card">
                    <h1>About Project</h1>
                    <p>
                        {parse(projectData.data.aboutProject)}
                    </p>
                </div>
                <div className="project-point card">
                    <h1>Screenshots</h1>
                    <div>
                        {projectData.data.screenshots.map((screenshot, i) => {
                            return <div className="screenshot" key={i + "screenshot"}>
                                <h2>{screenshot.title}</h2>
                                <img className="screenshot-img" src={screenshot.url} alt={"screenshot"} />
                                <p className="screenshot-description">
                                    {screenshot.description}
                                </p>
                                <div className="clear"></div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="project-point card">
                    <h1>Development Details</h1>
                    <div>
                        {
                            (projectData.data.developers.length > 1) ?
                                "Developed by my and my Team:" :
                                "Designed and Developed by me"
                        }
                        <br />
                        <br />
                        <div className="memberCards display">
                            {projectData.data.developers.map((developer, i) => {
                                return (
                                    <a className="memberCard"
                                        key={i + "screenshot"}
                                        href={developer.username === developer.name ? "##" : "https://github.com/" + developer.username}
                                        target={developer.username === developer.name ? "_self" : "_blank"} rel="noreferrer">

                                        <Avatar
                                            {...stringAvatar(developer.logoTxt)}
                                            key={i + "screenshot"}
                                            alt={developer.name + " profile image"}
                                            src={developer.avatar}
                                            className={"bg" + (1 + (i % 5))}
                                            style={{ outline: "2px solid #55555522" }}
                                            sx={{ width: 55, height: 55 }}
                                        />
                                        <div className="detail">
                                            <p className="name">{developer.name}</p>
                                            <p className="username">{developer.username}</p>
                                        </div>
                                    </a>)
                            })}
                        </div>
                        <div className="project-languages">
                            {projectData.technologies.map((technology, i) => {
                                return <span key={i + "screenshot"}>{technology.name}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProjectDetail;
/* 

                <h1>ProjectDetail: {projectIDTXT}</h1>
                <ul>
                    // <li>Title</li>
                    // <li>languages used</li>
                    // <li>links</li>
                    // <li>detailed description</li>
                    <li>working/flow explanation with SS</li>
                    <li>Developed by</li>
                </ul>


*/