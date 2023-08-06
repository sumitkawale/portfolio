import { useEffect } from "react";
import resumeDefault from "./sumitkawale_resume.pdf";
import { Link } from 'react-router-dom'

import { imgSrc as src } from "../App/App";

import "./Resume.css"

const Resume = () => {

    useEffect(() => {
        fetch(src + "/doc/sumitkawale_resume.pdf")
            .then(d => {
                if (d.status === 200) {
                    document.getElementById("resume-pdf-file").data = src + "doc/sumitkawale_resume.pdf"
                    document.getElementById("resume-download-link").href = src + "doc/sumitkawale_resume.pdf"
                }
                else {
                    document.getElementById("resume-pdf-file").data = resumeDefault
                    document.getElementById("resume-download-link").href = resumeDefault
                }
            })
            .catch(e => {
                document.getElementById("resume-pdf-file").data = resumeDefault
                document.getElementById("resume-download-link").href = resumeDefault
            });
    }, [])

    return <div className="resume-container">
        <Link to={"/"}>
            <a href className="go-to-portfolio"><span>ↆ</span> Back to portfolio</a>
        </Link>
        <object id="resume-pdf-file" data={resumeDefault} type="application/pdf" aria-label="sumitkawale_resume" width="100%" height="100%">
            <a id="resume-download-link" target={"_blank"} rel="noreferrer" href={src + "doc/sumitkawale_resume.pdf"}>
                <img src={src + "resume_logo.svg"} alt="icon" />
                <div>
                    <h2>download</h2>
                    <span>sumitkawale_resume.pdf</span>
                </div>
            </a>
        </object>
    </div>
}

export default Resume





/* // to display just a view

import React, { useState } from "react";
import resume from "./sumitkawale_resume.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"

const Resume = () => {
    const [numPage, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(null);

    function documentLoadSuccess ({numPages})  {
        setNumPages(numPages);
        setPageNumber(1);
    }   

    return <>
        <Document file={resume} renderMode="pdf" onLoadSuccess={documentLoadSuccess}>
            <Page height={"700"} pageNumber={pageNumber} />
        </Document>
    </>
}

export default Resume

 */