const self = {
    "nextHashTags": " #javascript ",
    "studyingInYear": "4<sup>th</sup>",
    "workingIn": "",
    "workingAs": "",
    "profilePhoto": "SKme.jpg",
    "beComplete": false,
    "customText": ""
}

const education = [
    {
        "id": "pict",
        "logo": "/about/pictLogo.png",
        "clg": "SCTR's Pune Institute Of Computer Technology, Pune",
        "link": "https://pict.edu",
        "courseDetail": "(B.E) ",
        "branch": " Information Technology",
        "details": "(SPPU) B.E in <strong>Information Technology</strong>",
        "from": "2021",
        "to": "2024",
        "status": "-pursuing-",
        "grade": "",
        "logoTxt": "PICT",
        "alt": "PICT_LOGO"
    },
    {
        "id": "vpp",
        "logo": "/about/vppLogo.png",
        "clg": "Vidya Prathishthan's Polytechnic College, Indapur",
        "link": "https://www.vppolytechnic.org",
        "courseDetail": "(MSBTE) ",
        "branch": " Computer Engineering",
        "details": "(MSBTE) Diploma in <strong>Computer Engineering</strong>",
        "from": "2018",
        "to": "2021",
        "status": "completed",
        "grade": "95.43%",
        "logoTxt": "VPP",
        "alt": "VPP_LOGO"
    },
    {
        "id": "mgm",
        "logo": "/about/mgmLogo.png",
        "clg": "Mahatma Gandhi Vidyalay, Paranda, Osmanabad",
        "link": "#",
        "courseDetail": "(SSC)",
        "branch": "10th",
        "details": "(SSC) 10<sup>th</sup>",
        "from": "2015",
        "to": "2018",
        "status": "completed",
        "grade": "73%",
        "logoTxt": "MGM",
        "alt": "MGM_LOGO"
    }
]

const currentStatus = [
    {
        "id": "pict",
        "logo": "/about/pictLogo.png",
        "logoTxt": "PICT",
        "alt": "PICT_LOGO",
        "title": "SCTR's Pune Institute Of Computer Technology, Pune",
        "link": "https://pict.edu",
        "details": "(SPPU) B.E in <strong>Information Technology</strong>",
        "from": "2021 - 2024",
        "description": ""
    }
]

const experience = [
    {
        "id": "shivankit",
        "logo": "/about/shivankitTechSolutions.png",
        "logoTxt": "S",
        "alt": "SHIVANKIT_TECH_SOLUTIONS_LOGO",
        "title": "(INTERNSHIP) Shivankit TechSolutions, Delhi",
        "link": "https://www.linkedin.com/company/shivankittech/?originalSubdomain=in",
        "details": "Worked as <strong>Web Developer</strong> intern",
        "duration": "<i>From: </i> Nov-2022 - Apr-2023 <b>(6-months)</b>",
        "description": "During my six-month internship at Shivankit TechSolutions, I worked as a full-stack web developer and obtained hands-on experience in various technologies such as <strong className='language'>Node.js, MongoDB, Express.js, MySQL, PHP, and more.</strong> My primary responsibility was to work on existing projects and contribute to the development of web applications with my team."
    },
    {
        "id": "RemedbooksTechnologies",
        // "logo": "/about/fanadda.png",
        "logoTxt": "RT",
        "alt": "RemedbooksTechnologies",
        "title": "(INTERNSHIP) Remedbooks Technologies",
        "link": "https://www.linkedin.com/company/fanadda/?originalSubdomain=in",
        "details": "Worked as <strong>Web Developer</strong> intern",
        "duration": "<i>From: </i> May-2022 to OCT-2022 <b>(6-months)</b>",
        "description": "I was responsible for working on the server-side using Node.js, creating and managing databases using MongoDB and MySQL, developing and maintaining the front-end using technologies such as <strong className='language'>HTML, CSS, and JavaScript</strong>, and building RESTful APIs using <strong className='language'>NodeJs, Express.js and MongoDB.</strong>"
    },
    {
        "id": "lsoys",
        "logo": "/about/lsoys.png",
        "logoTxt": "LSOYS",
        "alt": "LSOYS_LOGO",
        "title": "LSOYS",
        "link": "https://www.linkedin.com/in/lsoys/",
        "details": "Worked as <strong>Freelance Web Developer</strong>",
        "duration": "<i>Duration: </i> 4-months",
        "description": "I've worked on technologies <strong className='language'>JavaScript, JQuery, Bootstrap, PHP, MySql</strong> etc<br/>I've developed Service and Utility Products.<br/>"
    }
]

const skills = {
    "FrontEnd": [
        {
            "technology": "HTML",
            "perfect": 95,
            "logo": "html5.svg",
            "perfectLabel": "Proficient"
        },
        {
            "technology": "CSS",
            "perfect": 90,
            "logo": "css3.svg",
            "perfectLabel": "Proficient"
        },
        {
            "technology": "JavaScript",
            "perfect": 80,
            "logo": "javascript.svg",
            "perfectLabel": "Proficient"
        },
        {
            "technology": "React",
            "perfect": 70,
            "logo": "react.svg",
            "perfectLabel": "Skillful"
        },
        {
            "technology": "Angular",
            "perfect": 20,
            "logo": "angular.svg",
            "perfectLabel": "Beginner"
        },
        {
            "technology": "BootStrap",
            "perfect": 95,
            "logo": "bootstrap.svg",
            "perfectLabel": "Proficient"
        }
    ],
    "BackEnd": [
        {
            "technology": "NodeJS",
            "perfect": 70,
            "logo": "nodejs.svg",
            "perfectLabel": "Intermediate"
        },
        {
            "technology": "Express",
            "perfect": 80,
            "logo": "expressjs.svg",
            "perfectLabel": "Intermediate"
        },
        {
            "technology": "PHP",
            "perfect": 85,
            "logo": "php.svg",
            "perfectLabel": "Proficient"
        }
    ],
    "Database": [
        {
            "technology": "MySQL",
            "perfect": 75,
            "logo": "mysql.svg",
            "perfectLabel": "Proficient"
        },
        {
            "technology": "MongoDB",
            "perfect": 75,
            "logo": "mongodb.svg",
            "perfectLabel": "Skillful"
        },
        {
            "technology": "SQLite",
            "perfect": 75,
            "logo": "sqlite.svg",
            "perfectLabel": "Skillful"
        }
    ],
    "Programming": [
        {
            "technology": "C Language",
            "perfect": 75,
            "logo": "c.svg",
            "perfectLabel": "Proficient"
        },
        {
            "technology": "C++",
            "perfect": 75,
            "logo": "cpp.svg",
            "perfectLabel": "Skillful"
        },
        {
            "technology": "Java",
            "perfect": 75,
            "logo": "java.svg",
            "perfectLabel": "Skillful"
        },
        {
            "technology": "JavaScript",
            "perfect": 80,
            "logo": "javascript.svg",
            "perfectLabel": "Proficient"
        },
    ],
    "Other": [
        {
            "technology": "git",
            "perfect": 70,
            "logo": "github.svg",
            "perfectLabel": "Proficient"
        },
        {
            "technology": "MongodbAtlas",
            "perfect": 70,
            "logo": "mongodbAtlas.svg",
            "perfectLabel": "Intermediate"
        },
        {
            "technology": "AWS",
            "perfect": 10,
            "logo": "cloud.svg",
            "perfectLabel": "Beginner"
        }
    ]
}

const defaultAboutData = {
    self,
    education,
    currentStatus,
    skills,
    experience,
}

// console.log(JSON.stringify(defaultAboutData));

export default defaultAboutData
