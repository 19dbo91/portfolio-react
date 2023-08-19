/*
    WHEN I am presented with the Portfolio section
        THEN I see titled images of six of the developer’s applications with
        links to both the deployed applications and the corresponding GitHub repositories

    * A single `Project` component that will be used multiple times in the Portfolio section
*/
import React from 'react';

const styles = {};

const projects = [{},{}];

const Portfolio =() =>{
    return (
        <div>
            <h2>Portfolio</h2>
            <hr />
            <Project prop1={something} prop2={something}/>
            <Project prop1={something} prop2={something}/>
            <Project prop1={something} prop2={something}/>
            <Project prop1={something} prop2={something}/>
            <Project prop1={something} prop2={something}/>
            <Project prop1={something} prop2={something}/>
        </div>
    );
};
export default Portfolio;