/*  WHEN I am presented with the Resume section
        THEN I see a link to 
            a downloadable resume and 
            a list of the developer’s proficiencies
*/

import React from 'react';

const styles = {};

const Resume =() =>{
    return (
        <div>
            <hr />
            <h2>Resume</h2>
            
            <a href="resume.pdf"> Download resume </a>
            <p>This is where my resume starts</p>
        </div>
    );
};

export default Resume;