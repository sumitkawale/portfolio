import { imgSrc } from '../../App';


const ListLanguages = props => {
    return <li>
        {props.tech.logo ? <img src={imgSrc + props.tech.logo} alt={props.tech.technology + "_logo"} className={"color" + props.color} /> : ""}
        <h5>{props.tech.technology}</h5>
    </li>
}

const LanguageSection = props => {
    return <div className="languageSection">
        <h3 className={"skillSection" + props.color}>{props.title}</h3>
        <ul>
            {
                props.list.map(val => {
                    return <ListLanguages key={val.perfect + val.technology} color={props.color} tech={val}></ListLanguages>
                })
            }
        </ul>
    </div>
}

const Skills = (props) => {
    const { FrontEnd, BackEnd, Database, Other } = props.value;
    return <div id='skills'>
        {
            Object.keys(props.value).map((section, i) => {
                return <LanguageSection key={section + " " + i} title={section} color={(i % 3) + 1} list={props.value[section]} />
            })
        }
    </div>
}

export default Skills