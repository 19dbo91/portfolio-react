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
    animation:"animate__animated animate__fadeIn m-5 rounded-full",
    heading: `m-2 text-center text-2xl text-[${themeColor.main}] bg-[${themeColor.secondary}] rounded-lg`,
    form: `rounded-md bg-[${themeColor.secondary}] p-5 mx-12 my-12 grid grid-cols-1`,
    inputText:`mb-2`,
    inputButton: `rounded-full mx-0 p-1 bg-[${themeColor.accent}] font-semibold text-[${themeColor.main}] hover:text-[${themeColor.secondary}]`,

};

const Contact =() => {
    return (
        <div class={styles.animation}>
            <h2 class={styles.heading}>Contact</h2>
            <form class={styles.form}>
                <label for="name">Name: </label>
                <input class={styles.inputText} type="text" name="name"/>

                <label for="email">Email: </label>
                <input class={styles.inputText}type="text"name="email"/>

                <label for="message">Message: </label>
                <textarea class={styles.inputText} type="text" name="message"/>
                
                <input class={styles.inputButton} type='submit' value="Submit"/>
            </form>
        </div>
    );
};

export default Contact;