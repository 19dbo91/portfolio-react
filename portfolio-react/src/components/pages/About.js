/*
    WHEN I am presented with the About Me section
        THEN I see a recent photo or avatar of the developer and a short bio about them
*/

//pic

import React from 'react';
import themeColor from '../../styles/themeColor'

const avatarSize = 24;

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading: `m-2 text-center text-2xl text-[${themeColor.main}] bg-[${themeColor.secondary}] rounded-lg`,
    pageBody: `text-[${themeColor.main}] bg-[${themeColor.secondary}] rounded-lg`,
    avatar: ` text-[${themeColor.main}] text-center h-${avatarSize} w-${avatarSize} bg-[${themeColor.secondary}] rounded-full`,
    avatarContainer: "justify-center"
    
};

const my = {
    photo: '',
    altToPhoto: 'This is a photo of Dustin Bonilla',
    bio: "Welcome to my website! I am Dustin Bonilla. I am an aspiring web developer eager to {value statemnt}, here",
};

const About = () => {
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>About Me</h2>
            <div class={styles.avatarContainer}>
                <img class={styles.avatar} src={my.photo} alt={my.altToPhoto}/>
            </div>
            <p class={styles.pageBody}>{my.bio}</p>
        </div>
    );
};

export default About;