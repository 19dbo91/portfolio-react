/*
    WHEN I view the footer
        THEN I am presented with text or icon links to the developer’s 
            GitHub and 
            LinkedIn profiles, 
            and their profile on a third platform (Stack Overflow, Twitter)

    * A single `Footer` component that appears on multiple pages
*/
import React from 'react';
import Socials from './Socials';
import themeColor from '../styles/themeColor'

const socials = [
    {
        title: 'GitHub',
        link: 'https://github.com/19dbo91',
        icon: '/img/github-mark/github-mark-white.png',
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/dustin-bonilla-503110172/',
        icon: '',
    },
    {
        title: '',
        link: '',
        icon: '',
    }
];

const styles = {
    footer: `m-5 bg-[${themeColor.main}]`
};

const Footer = () =>{
    return (
        <div class={styles.footer} >
            <Socials
                title={socials[0].title}
                link={socials[0].link}
                icon={socials[0].icon} />
            <Socials
                title={socials[1].title}
                link={socials[1].link}
                icon={socials[1].icon} />
            <Socials
                title={socials[2].title}
                link={socials[2].link}
                icon={socials[2].icon} />
        </div>
    );
};

export default Footer;