const self = {
    nextHashTags: " #javascript ",
    studyingInYear: "3<sup>rd</sup>",
    workingIn: "Shivankit TechSolutions",
    workingAs: "Web Developer intern",
    profilePhoto:"SKme.jpg",
    beComplete: true
}

const education = [
    {
        id: "pict",
        logo: "/about/pictLogo.png",
        clg: "SCTR's Pune Institute Of Computer Technology, Pune",
        link: "https://pict.edu",
        courseDetail: "(B.E) ",
        branch: " Information Technology",
        details: "(B.E) in <strong>Information Technology</strong>",
        from: "2021",
        to: "2024",
        status: "-pursuing-",
        grade: "",
        logoTxt: "PICT",
        alt: "PICT_LOGO"
    },
    {
        id: "vpp",
        logo: "/about/vppLogo.png",
        clg: "Vidya Prathishthan's Polytechnic College, Indapur",
        link: "https://www.vppolytechnic.org",
        courseDetail: "(MSBTE) ",
        branch: " Computer Engineering",
        details: "(MSBTE) Diploma in <strong>Computer Engineering</strong>",
        from: "2018",
        to: "2021",
        status: "completed",
        grade: "95.43%",
        logoTxt: "VPP",
        alt: "VPP_LOGO"
    },
    {
        id: "mgm",
        logo: "/about/mgmLogo.png",
        clg: "Mahatma Gandhi Vidyalay, Paranda, Osmanabad",
        link: "#",
        courseDetail: "(SSC)",
        branch: "10th",
        details: "(SSC) 10<sup>th</sup>",
        from: "2015",
        to: "2018",
        status: "completed",
        grade: "73%",
        logoTxt: "MGM",
        alt: "MGM_LOGO"
    }
]

const currentStatus = [
    {
        id: "pict",
        logo: "/about/pictLogo.png",
        logoTxt: "PICT",
        alt: "PICT_LOGO",
        title: "SCTR's Pune Institute Of Computer Technology, Pune",
        link: "https://pict.edu",
        details: "(B.E) <strong>Information Technology</strong>",
        from: "2021 - 2024",
        description: "",
    },
    {
        id: "sts",
        logo: "/about/shivankitTechSolutions.png",
        logoTxt: "S",
        alt: "SHIVANKIT_TECH_SOLUTIONS_LOGO",
        title: "(INTERNSHIP) Shivankit TechSolutions, Delhi",
        link: "https://www.linkedin.com/company/shivankittech/?originalSubdomain=in",
        details: "Working as <strong>Web Developer</strong> intern",
        from: "1-Jan-2023 - present",
        description: `
            I'm working on technologies <strong className='language'>JavaScript, NodeJS, PHP, MySql</strong> etc<br/>
            I'm developing Service and Utility Products.<br/> 
        `,
        //            I'm managing 80-85% work in both backend and frontend

    }
]

const experience = [
    {
        id: "shivankit",
        logo: "/about/shivankitTechSolutions.png",
        logoTxt: "S",
        alt: "SHIVANKIT_TECH_SOLUTIONS_LOGO",
        title: "(INTERNSHIP) Shivankit TechSolutions, Delhi",
        link: "https://www.linkedin.com/company/shivankittech/?originalSubdomain=in",
        details: "Working as <strong>Web Developer</strong> intern",
        duration: "<i>From: </i> 1-Jan-2023 - present",
        description: `
            I'm working on technologies <strong className='language'>JavaScript, NodeJS, PHP, MySql</strong> etc.<br/>
            I'm developing Service and Utility Products.<br/> 
            I'm managing 80-85% work in both backend and frontend
        `,
    },
    {
        id: "fanadda",
        logo: "/about/fanadda.png",
        logoTxt: "FA",
        alt: "FanAdda",
        title: "(INTERNSHIP) FanAdda",
        link: "https://www.linkedin.com/company/fanadda/?originalSubdomain=in",
        details: "Working as <strong>Web Developer</strong> intern",
        duration: "<i>From: </i> 21-May-2022 to 31-Dec-2022",
        description: `
            I've worked on technologies <strong className='language'>JavaScript, NodeJS, PHP, Laravel, MySql</strong> etc.<br/>
            I had developed Service and Utility Products.<br/> 
            I'm managing full work in both backend and frontend on tasks
        `,
    },
    {
        id: "lsoys",
        logo: "/about/lsoys.png",
        logoTxt: "LSOYS",
        alt: "LSOYS_LOGO",
        title: "LSOYS",
        link: "https://www.linkedin.com/in/lsoys/",
        details: "Worked as <strong>Freelance Web Developer</strong>",
        duration: "<i>Duration: </i> 4 months",
        description: `
            I've worked on technologies <strong className='language'>JavaScript, JQuery, Bootstrap, PHP, MySql</strong> etc<br/>
            I've developed Service and Utility Products.<br/> 
        `,
        // I've managed 80-85% work in both backend and frontend
    }
]

const skills = {
    FrontEnd: [
        {
            technology: "HTML",
            perfect: 75,
            perfectLabel: "Proficient"
        },
        {
            technology: "CSS",
            perfect: 70,
            perfectLabel: "Proficient"
        },
        {
            technology: "JavaScript",
            perfect: 70,
            perfectLabel: "Proficient"
        },
        {
            technology: "React",
            perfect: 60,
            perfectLabel: "Skillful"
        },
        {
            technology: "Angular",
            perfect: 20,
            perfectLabel: "Beginner"
        },
        {
            technology: "BootStrap",
            perfect: 73,
            perfectLabel: "Proficient"
        },
    ],
    BackEnd: [
        {
            technology: "NodeJS",
            perfect: 21,
            perfectLabel: "Intermediate"
        },
        {
            technology: "Express",
            perfect: 25,
            perfectLabel: "Intermediate"
        },
        {
            technology: "Django",
            perfect: 35,
            perfectLabel: "Intermediate"
        },
        {
            technology: "PHP",
            perfect: 70,
            perfectLabel: "Proficient"
        },
    ],
    Database: [
        {
            technology: "MySQL",
            perfect: 75,
            perfectLabel: "Proficient"
        },
        {
            technology: "MongoDB",
            perfect: 45,
            perfectLabel: "Skillful"
        },
        {
            technology: "SQLite",
            perfect: 51,
            perfectLabel: "Skillful"
        },
        {
            technology: "PostgreSQL",
            perfect: 51,
            perfectLabel: "Skillful"
        },
    ],
    Other: [
        {
            technology: "git",
            perfect: 70,
            perfectLabel: "Proficient"
        },
        {
            technology: "AWS",
            perfect: 5,
            perfectLabel: "Beginner"
        },
        {
            technology: "MongodbAtlas",
            perfect: 25,
            perfectLabel: "Intermediate"
        },
        {
            technology: "LocalTunnel",
            perfect: 70,
            perfectLabel: "Proficient"
        },
    ]
}

const defaultAboutData = {
    self,
    education,
    currentStatus,
    skills,
    experience,
}

export default defaultAboutData
