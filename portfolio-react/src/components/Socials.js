import React, { useState } from 'react';

const Socials = ({title, link, icon}) =>{
    <a href={link}>
        <img src={icon} alt="This is " />
    </a>
}

export default Socials;