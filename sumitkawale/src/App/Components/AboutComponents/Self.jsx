import React from "react"
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';


///////////////////////
import { imgSrc } from '../../App';

/////////////////////
const date1 = new Date('1/15/2002');
const date2 = new Date();
let year = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)) / 365;

const Self = (props) => {
    let selfNewData = props.value;

    return <div id='self'>
        <h2>I'm Sumit Uttamrao Kawale.</h2>
        <h5>#full-stack-developer #frontend #backend {selfNewData.nextHashTags}</h5>
        <img className='skImage skImageM' src={imgSrc + selfNewData.profilePhoto} alt="My Pic" />
        <p>
            {
                selfNewData.beComplete
                    ?
                    parse(`I've Completed B.E in IT department in <abbr title="Pune Institute Of Computer Technology">PICT</abbr>`)
                    :
                    parse(`I'm Studying in B.E ${selfNewData.studyingInYear} year in IT department in <abbr title="Pune Institute Of Computer Technology">PICT</abbr>`)
            }.
            <br />
            Currently I'm working in <b>{selfNewData.workingIn}</b> as {selfNewData.workingAs}.
            <br />
            <br />
            <strong>I'm Highly Interested in JavaScript</strong>, I want to be professional in JavaScript development and some of its frameworks
        </p>
        <h3>I'm {parseInt(year)} years old</h3>
        <br />
        <br />
        <Link to={"/resume"}>View My RESUME</Link>
    </div>
}

export default Self