import React from "react";
import { Link } from "react-router-dom"

// import SKlogo from "../media/SKlogo.png"
import "../Style/NavBar.css"

const scroll = (to, e) => {
    let a = document.getElementById(to)
    a.scrollIntoView({ behavior: "smooth" })
}

const ScrollLink = (props) => {
    return <>
        {/* eslint-disable-next-line */}
        {props.link || <a className="animate" onClick={(e) => { scroll(props.to, e); document.getElementById("navbarResponsiveBtn").click() }}>{props.children}</a>}

        {/* eslint-disable-next-line */}
        {props.link && <Link to={"/#" + props.to} className="animate" onClick={(e) => { setTimeout(() => { e.target.click() }, 1000); document.getElementById("navbarResponsiveBtn").click() }}>{props.children}</Link>}
    </>
}

const gotoTop = e => {
    window.scrollBy(0, -100000000000)
}

const NavBar = (props) => {
    return <header>
        <div className="nav-container">
            <nav className="nav-checkbox">
                <span className="logo">
                    {
                        props.link ?
                            <Link to="/" className="animate" onClick={gotoTop}>
                                SK
                            </Link>
                            :
                            /* eslint-disable-next-line */
                            <a className="animate" onClick={gotoTop}>
                                SK
                            </a>
                    }

                </span>
                <input id="navbarResponsiveBtn" className="top-nav" type="checkbox" />
                <label htmlFor="navbarResponsiveBtn" className="top-nav-label"></label>
                <ul className="top-content">
                    <li><ScrollLink htmlFor="navbarResponsiveBtn" link={props.link} to={"aboutParent"}>About</ScrollLink></li>
                    <li><ScrollLink htmlFor="navbarResponsiveBtn" link={props.link} to={"projectsParent"}>Projects</ScrollLink></li>
                    {/* <li><ScrollLink htmlFor="navbarResponsiveBtn" to={"blogsParent"}>Blogs</ScrollLink></li> */}
                    <li><ScrollLink htmlFor="navbarResponsiveBtn" link={props.link} to={"contactParent"}>Contact</ScrollLink></li>
                    <li><Link to="/resume" className="animate">Resume</Link></li>
                </ul>
            </nav>
        </div>
    </header>
}

export default NavBar;
export {gotoTop}