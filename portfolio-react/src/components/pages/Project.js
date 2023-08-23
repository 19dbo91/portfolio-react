/*
    * A single `Project` component that will be used multiple times in the Portfolio section
*/
import React, { useState }  from 'react';

const themeColor = {        //https://coolors.co/223843-eff1f3-dbd3d8-00a6fb-4a051c
    main: "#223843",        //60%
    secondary: "#EFF1F3",   //30%
    accent: "#00A6FB"       //10%
};

const styles = {
    project: `p-8 col-span-4 border-5 bg-[${themeColor.secondary}] border-[${themeColor.secondary}] rounded-lg text-[${themeColor.main}]`,
}

// overlay show name and description in box
//link will be in overlay, make sure to address bubbling for event

const Project = ({name, description, link, repo}) =>{
    return (
        <div class={styles.project}>
            <a href={repo} target='_blank'><h3>{name}</h3></a>
            <p>{description}</p>
            <a href={link} target='_blank'><img src=""/></a>
        </div>
    );
};

export default Project;