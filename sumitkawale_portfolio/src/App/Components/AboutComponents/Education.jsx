import React from "react";

import Avatar from '@mui/material/Avatar';
import parse from 'html-react-parser';
import LinearProgress from '@mui/material/LinearProgress';
// material ui issue solved
// https://github.com/oven-sh/bun/issues/875

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
    return <div className="educationCard">
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
            <h2><a href={props.link} target={"_blank"} rel="noreferrer">{parse(props.clg)}</a></h2>
            <h3>{parse(props.details)}</h3>
            <p className="date">
                {props.from} - {props.to}
            </p>
            <p className="other">
                <i>{props.status} </i>
                {props.grade && parse(` with <b> ${props.grade}</b> marks`)}
            </p>
        </div>
    </div>
}

const Education = (props) => {

    let educationData = props.value
    // console.warn(educationData)

    return <div id='education'>
        {
            educationData ? educationData.map((v) => {
                return <Card
                    key={v.id}
                    clg={v.clg}
                    link={v.link}
                    details={v.details}
                    from={v.from}
                    to={v.to}
                    status={v.status}
                    grade={v.grade}
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

export default Education