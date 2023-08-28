/*  WHEN I am presented with the Resume section
        THEN I see a link to 
            a downloadable resume and 
            a list of the developer’s proficiencies
*/

import React from 'react';
import themeColor from '../../styles/themeColor'

const styles = {
    animation:`animate__animated animate__fadeIn `,
    heading: `mt-3 mx-40 p-4  text-center text-3xl text-[${themeColor.main}] font-bold bg-[${themeColor.secondary}] rounded-lg`,
    body: `p-10 m-5 rounded-md text-[${themeColor.main}] bg-[${themeColor.secondary}]`,
    link: `font-semibold text-[${themeColor.main}] hover:text-[${themeColor.accent}]`
};

const Resume =() =>{
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>Resume</h2>
            <div class={styles.body}>
                <a class={styles.link} href="resume.pdf"> Download resume </a>
            <p>This is where my resume starts</p>
            </div>
        </div>
    );
};

export default Resume;