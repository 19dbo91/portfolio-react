/*
    WHEN I am presented with the About Me section
        THEN I see a recent photo or avatar of the developer and a short bio about them
*/

import React from 'react';
import themeColor from '../../styles/themeColor'

const size = 220;

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading: `mt-3 mx-40 p-4  text-center text-3xl text-[${themeColor.main}] font-bold bg-[${themeColor.secondary}] rounded-lg`,
    body: `p-10 m-5 rounded-md text-[${themeColor.main}] bg-[${themeColor.secondary}]`,
    bodyContainer: `flex justify-center rounded`,
    avatar: `m-10 p-1 text-[${themeColor.main}] text-center bg-[${themeColor.secondary}] rounded-full`,
    avatarContainer: "flex justify-center"
};

const my = {
    photo: "/img/headshot.png",
    alt: 'This is a photo of Dustin Bonilla',
    bio: "Welcome to my website! I am Dustin Bonilla. I am an aspiring web developer eager to create unique experiences and deliver valuable utilities for everyone to use. ",
};

const About = () => {
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>About Me</h2>
            <div class={styles.avatarContainer}>
                <img 
                    class={styles.avatar}
                    src={my.photo}
                    alt={my.alt}
                    width={size}
                    height={size}
                />
            </div>
            <div class={styles.bodyContainer}>
                <p class={styles.body}>{my.bio}</p>
            </div>
        </div>
    );
};

export default About;