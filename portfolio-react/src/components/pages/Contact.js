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
import React from 'react';
import themeColor from '../../styles/themeColor'

const styles = {
    animation:"animate__animated animate__fadeIn",
    heading: `m-2 text-center text-2xl text-[${themeColor.main}] bg-[${themeColor.secondary}] rounded-lg`,
};

const Contact =() => {
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>Contact</h2>
            <form className='form'>
                <label for="name">Name: </label>
                <input type="text" name="name"/>

                <label for="email">Email: </label>
                <input type="text"name="email"/>

                <label for="message">Message: </label>
                <textarea type="text" name="message"/>
                
                <input type='submit' value="submit"/>
            </form>
        </div>
    );
};

export default Contact;