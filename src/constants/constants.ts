import { InfoPropsInterface } from "../interfaces/info.interface";
import { NavigationInterface } from "../interfaces/navigation.interface";
import { SocialMediaInterface } from "../interfaces/social.interface";
import GithubIcon from "../components/icon/GithubIcon";
import { ExperienceInterface } from "../interfaces/experience.interface";
import LinkedinIcon from "../components/icon/LinkedinIcon";
import { ProjectInterface } from "../interfaces/project.interface";

import undergraduatePic from "../assets/images/undergraduate-project.png";
import chatbotPic from "../assets/images/chatbot-emotion.png";

export const HOMEPAGE_PATH = "/homepage";

export const fullname = "Veerayuth Bussararungsee";
export const position = "A Recent Software Engineering Graduate";
export const status = "Seeking for a software engineer position.";

export const infoData: InfoPropsInterface = {
    fullname: fullname,
    position: position,
    status: status,
};

export const navMenu: NavigationInterface[] = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
];

export const socialMediaLinks: SocialMediaInterface[] = [
    {
        title: "Github",
        href: "https://github.com/vveyuux",
        icon: GithubIcon,
    },
    {
        title: "LinkedIn",
        href: "https://linkedin.com/in/veerayuth-bussararungsee",
        icon: LinkedinIcon,
    },
];

export const experiences: ExperienceInterface[] = [
    {
        title: "Student Internship",
        companyName: "SCB TechX",
        description:
            "During my internship, I developed two web applications: a Clocking Web Application and an Overtime Web Application. The Clocking Web Application, helps employees easily record their work hours and allows managers to track and monitor this information. The Overtime Web Application, enables employees to request approval for overtime work, ensuring management can approve and verify these requests.",
        href: "https://scbtechx.io/th/home/",
        startDate: "Jun 2023",
        endDate: "Jan 2024",
        techStacks: [
            "React.js",
            "TypeScript",
            "Express.js",
            "Ruby on Rails",
            "PostgreSQL",
            "Docker",
            "Jenkins",
            "Kong API Gateway",
            "Azure Active Directory",
        ],
    },
];

export const projects: ProjectInterface[] = [
    {
        projectName: "A Machine Learning and Image Processing Model",
        subName: "for Medicine Identification for the Hearing Impaired",
        description: "The user captures an image of a pill, which the system analyzes to identify its type and properties. The resulting interface provides drug information and voice messages for visually impaired users, all developed using MATLAB.",
        href: "",
        imgPath: undergraduatePic,
        imgAlt: "Machine Learning Model for Medicine Identification",
    },
    {
        projectName: "Emotion Detection Chatbot",
        subName: "Analyzing Emotional Tone in Text",
        description: "In this project, the chatbot receives text input from the user, analyzes the emotional tone using its built-in model, and then responds with sentences that align with the detected emotion. The system aims to understand and mirror the user's emotional state, providing contextually relevant and empathetic responses.",
        href: "https://github.com/vveyuux/Chatbot_AI_Project",
        imgPath: chatbotPic,
        imgAlt: "Emotion Detection Chatbot",
    },
];
