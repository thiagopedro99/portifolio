import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";


const SkillsComponent = () => {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <IoLogoCss3 color="#2965F1" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
        { name: 'Sass', icon: <FaSass color="#CC6699" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
        { name: 'React', icon: <FaReact color="#61DBFB" /> },
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'GitHub', icon: <FaGithub color="#181717" /> },
        { name: 'NodeJS', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express', icon: <SiExpress color="#000" /> },
        { name: 'PostgreSQL', icon: <BiLogoPostgresql color="#336791" /> },
    ];
    return (
        <div className="row skills__container">
            {skills.map((skill, index) => (
                <div key={index} className="col-4 col-md-3 col-lg-2">
                    <div className="skills__item">
                        {skill.icon}
                        <span>{skill.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsComponent;