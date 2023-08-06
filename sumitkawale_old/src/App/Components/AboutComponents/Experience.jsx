import React from "react";

import Avatar from '@mui/material/Avatar';
import parse from 'html-react-parser';
import LinearProgress from '@mui/material/LinearProgress';

import { imgSrc } from "../../App"

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name}`,
    };
}

const Card = (props) => {
    return <div className="experienceCard">
        <span className="avatar">
            <a href={props.link} target={"_blank"} rel="noreferrer">
                <Avatar
                    {...stringAvatar(props.logoTxt)}
                    alt={props.alt}
                    src={props.logo}
                    className="avatarLogo"
                    style={{ outline: "2px solid #55555522" }}
                    sx={{ width: 80, height: 80 }}
                />
            </a>
        </span>
        <div className="content">
            <h2><a href={props.link} target={"_blank"} rel="noreferrer">{parse(props.title)}</a></h2>
            <h3>{parse(props.details)}</h3>
            <p className="date">
                {parse(props.duration)}
            </p>
            <p className="other">
                {parse(props.description)}
            </p>
        </div>
    </div>
}


const Experience = (props) => {

    let experienceData = props.value

    return <div id="experience">
        {
            experienceData ? experienceData.map((v) => {
                return <Card
                    key={v.id}
                    title={v.title}
                    link={v.link}
                    details={v.details}
                    duration={v.duration}
                    description={v.description}
                    logo={imgSrc + v.logo}
                    logoTxt={v.logoTxt}
                    alt={v.alt}
                />
            }) : <>
                <LinearProgress />
            </>
        }
    </div>
}

export default Experience;