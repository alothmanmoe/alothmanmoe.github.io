import {FaBriefcase, FaCode, FaProjectDiagram, FaUser} from "react-icons/fa";

export const siteConfig = {
    profile: {
        fullName: 'Moe Alothman',
        avatarSrcImg: '/profile_pic.png'
    },
    navbar: {
        routes: [
            {name: 'About', link: '#about', icon: <FaUser/>},
            {name: 'Skills', link: '#skills', icon: <FaCode/>},
            {name: 'Projects', link: '#projects', icon: <FaProjectDiagram/>},
            {name: 'Experience', link: '#experience', icon: <FaBriefcase/>}
        ]
    }
};