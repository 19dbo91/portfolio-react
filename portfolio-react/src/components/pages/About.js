/*
    WHEN I am presented with the About Me section
        THEN I see a recent photo or avatar of the developer and a short bio about them
*/

//pic

import React, { useState }  from 'react';

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading:"text-2xl bg-[#EFF1F3] text-[#223843]"
    
};

const photo = {
    src: '',
    alt:'',
};

const my = {
    photo: '',
    altToPhoto: 'This is a photo of Dustin Bonilla',
    bio: 'My name is Dustin and ',
};

const About = () => {
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>About Me</h2>
            <img src={my.photo} alt={my.altToPhoto}/>
            <p>{my.bio}</p>
        </div>
    );
};

export default About;