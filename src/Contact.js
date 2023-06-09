import react from 'react'
import './styles/Contact.css'

function Contact (){
    return (
        <>
        <section id='contact'>
        <div className='contact-main'>
        <h2 className='contact-header'>Let's talk<span>!</span></h2>
        <form>
        <label>Your name:</label>
            <input type='text'></input>
        <label>Your email:</label>
            <input type='email'></input>
        <label for="w3review">Your message:</label>
            <textarea id="w3review" name="w3review" rows="4" cols="50">Type your message here</textarea>
            <input value="SEND MESSAGE" type='submit'></input>
        </form>

        </div>
        </section>
                    


        </>
    )
}

export default Contact;