/*  WHEN I am presented with the Resume section
        THEN I see a link to 
            a downloadable resume and 
            a list of the developer’s proficiencies
*/

import React from 'react';

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading:"text-2xl"
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