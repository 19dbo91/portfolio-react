/*
    WHEN I am presented with the Portfolio section
        THEN I see titled images of six of the developer’s applications with
        links to both the deployed applications and the corresponding GitHub repositories

    * A single `Project` component that will be used multiple times in the Portfolio section
*/
import React, { useState }  from 'react';
import Project from './Project';

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading:"text-2xl",
    portfolio: "grid grid-cols-12",
};

const projects = [
    {
        name: "Dad Gifs",
        description: "Pairing Giphy to DadJokes. #html #css #js",
        link:'https://github.com/19dbo91/dad-gifs',
        repo:'https://19dbo91.github.io/dad-gifs/',
    },{
        name: "Weather Dashboard",
        description: "Forecasts 5 days for a given city. #html #css #js #api",
        link:'https://19dbo91.github.io/weather-dashboard/',
        repo:'https://github.com/19dbo91/weather-dashboard',
    },{
        name: "Task Popper",
        description: " #heroku #mvc #sql #sequelize #handlebars",
        link:'https://polar-falls-15096-ec42d57531c1.herokuapp.com/',
        repo:'https://github.com/19dbo91/Task-Popper',
    },{
        name: "Project 4",
        description: "This is project one",
        link:'',
        repo:'',
    },{
        name: "Project 5",
        description: "This is project one",
        link:'',
        repo:'',
    },{
        name: "Project 6",
        description: "This is project one",
        link:'',
        repo:'',
    },
];


const showcase = ()=>{
    projects.map = (project) =>{
        <Project name={project.name} description={project.description} link={project.link} repo={project.repo}/>
    }
}

const Portfolio =() =>{
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>Portfolio</h2>
            <div class={styles.portfolio}>
                {showcase()}
                <Project
                    name={projects[0].name}
                    description={projects[0].description}
                    link={projects[0].link}
                    repo={projects[0].repo}
                />
                <Project
                    name={projects[1].name}
                    description={projects[1].description}
                    link={projects[1].link}
                    repo={projects[1].repo}
                />
            
            </div>
        </div>
    );
};
export default Portfolio;