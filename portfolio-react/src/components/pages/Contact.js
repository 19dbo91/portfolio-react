/*
    WHEN I am presented with the Contact section
        THEN I see a contact form with fields for 
            a name,
            an email address, and
            a message
    
    WHEN I move my cursor out of one of the form fields without entering text
        THEN I receive a notification that this field is required

    WHEN I enter text into the email address field
        THEN I receive a notification if I have entered an invalid email address

    WHEN I am presented with the Resume section
        THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
*/
import React, { useState }  from 'react';

const styles = {};

const Contact =() => {
    return (
        <div>
            <hr />
            <h2>Contact</h2>
            <form className='form'>
                <label for="name">Name: </label>
                <input type="text" name="name"/>

                <label for="email">Email: </label>
                <input type="text"name="email"/>

                <label for="message">Message: </label>
                <input type="text" name="message"/>
                <input type='submit' value="submit"/>
            </form>
        </div>
    );
};

export default Contact;