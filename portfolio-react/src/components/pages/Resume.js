/*  WHEN I am presented with the Resume section
        THEN I see a link to 
            a downloadable resume and 
            a list of the developer’s proficiencies
*/

import React from 'react';
import themeColor from '../../styles/themeColor'

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading: `m-2 text-center text-2xl text-[${themeColor.main}] bg-[${themeColor.secondary}] rounded-lg`
};

const Resume =() =>{
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>Resume</h2>
            
            <a href="resume.pdf"> Download resume </a>
            <p>This is where my resume starts</p>
        </div>
    );
};

export default Resume;