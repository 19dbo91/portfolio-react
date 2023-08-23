/*
    * A single `Project` component that will be used multiple times in the Portfolio section
*/
import React from 'react';
import themeColor from '../../styles/themeColor'

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