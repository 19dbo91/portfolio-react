/*
    WHEN I am presented with the About Me section
        THEN I see a recent photo or avatar of the developer and a short bio about them
*/

//pic

import React from 'react';

const styles = {}

const photo = {
    src: '',
    alt:'',
};

const my = {
    photo: '',
    altToPhoto: 'This is a photo of Dustin Bonilla',
    bio: 'This is a blurb about me',
};

const About =() => {
    return (
        <div>
            <img src={my.photo} alt={my.altToPhoto}/>
            <p>{my.bio}</p>
        </div>
    );
};

export default About;