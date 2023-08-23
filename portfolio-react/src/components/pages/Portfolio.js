/*
    WHEN I am presented with the Portfolio section
        THEN I see titled images of six of the developer’s applications with
        links to both the deployed applications and the corresponding GitHub repositories

    * A single `Project` component that will be used multiple times in the Portfolio section
*/
import React  from 'react';
import Project from './Project';
import themeColor from '../../styles/themeColor'

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading:`m-2 text-center text-2xl text-[#${themeColor.main}] bg-[${themeColor.secondary}] rounded-lg`,
    portfolio: "mx-5 grid grid-cols-12 gap-2",
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

const Portfolio =() =>{
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>Portfolio</h2>
            <div class={styles.portfolio}>
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
                <Project
                    name={projects[2].name}
                    description={projects[2].description}
                    link={projects[2].link}
                    repo={projects[2].repo}
                />
                <Project
                    name={projects[3].name}
                    description={projects[3].description}
                    link={projects[3].link}
                    repo={projects[3].repo}
                />
                                <Project
                    name={projects[4].name}
                    description={projects[4].description}
                    link={projects[4].link}
                    repo={projects[4].repo}
                />
                                <Project
                    name={projects[5].name}
                    description={projects[5].description}
                    link={projects[5].link}
                    repo={projects[5].repo}
                />
            </div>
        </div>
    );
};
export default Portfolio;