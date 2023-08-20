/*
    * A single `Project` component that will be used multiple times in the Portfolio section
*/
import React, { useState }  from 'react';
const styles = {}


//on mouse hover:
// overlay show name and description in box

const onMouseHover = () => {

}


const Project = ({name, description}) =>{
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Project;