/*
    WHEN I am presented with the Portfolio section
        THEN I see titled images of six of the developer’s applications with
        links to both the deployed applications and the corresponding GitHub repositories

    * A single `Project` component that will be used multiple times in the Portfolio section
*/
import React, { useState }  from 'react';
import Project from './Project';

const styles = {};

const projects = [
    {
        name: "Project 1",
        description: "This is project one",
    },
    {}
];

const Portfolio =() =>{
    return (
        <div>
            <h2>Portfolio</h2>
            <hr />
            <Project name={projects[0].name} description={projects[0].description} />
            <Project name={projects[1].name} description={projects[1].description} />
            <Project name={projects[2].name} description={projects[2].description} />
            <Project name={projects[3].name} description={projects[3].description} />
            <Project name={projects[4].name} description={projects[4].description} />
            <Project name={projects[5].name} description={projects[5].description} />
        </div>
    );
};
export default Portfolio;