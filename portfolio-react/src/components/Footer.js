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

const themeColor = {        //https://coolors.co/223843-eff1f3-dbd3d8-00a6fb-4a051c
    main: "#223843",        //60%
    secondary: "#EFF1F3",   //30%
    accent: "#00A6FB"       //10%
};

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