import React from "react";

const TechCard = props => {
    return <li>
        <h5>{props.tech.technology}</h5>
        <span>
            {props.tech.perfectLabel}
            <span style={{ right: `${100 - props.tech.perfect}%` }}></span>
        </span>
    </li>
}

const Card = props => {
    return <div className="card">
        <h3 className={props.color}>{props.title}</h3>
        <ul>
            {
                props.list.map(val => {
                    return <TechCard key={val.perfect + val.technology} tech={val}></TechCard>
                })
            }
        </ul>
    </div>
}

const Skills = (props) => {
    /* 
        0-20: Beginner
        21-40%: Intermediate
        41-60%: Skillful
        61-80%: Proficient
        81-100%: Experienced
    */

    const {FrontEnd, BackEnd, Database, Other} = props.value;

    return <div id='skills'>
        <div className="cards">
            <Card title="FrontEnd" color="" list={FrontEnd} />
            <Card title="BackEnd" color="color2" list={BackEnd} />
            <Card title="Database" color="color3" list={Database} />
            <Card title="Other" color="color1" list={Other} />
        </div>
    </div>
}

export default Skills