import React, { useState } from 'react';


function Contact() {
    const [message, setMessage] = useState({});

    const encode = (data) => {
        return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }

    const handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...message})
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

        e.preventDefault();
    }

    return (
        <aside className="container_contact">
            <h1 className="section_title">Contact</h1>
            <div className="subContact">
                 
                <form className="contact-form" onSubmit={handleSubmit} data-netlify="true">
                    <p>
                        <label className="contact_name">
                            Your Name: <input type="text" name="name" onChange={handleChange} required />   
                        </label>
                    </p>
                    <p>
                        <label className="contact_email">
                            Your Email: <input type="email" name="email" onChange={handleChange} required></input>
                        </label>
                    </p>
                    <p>
                        <label className="message">
                            Message: <textarea name="message" onChange={handleChange} className="message_input" required/>
                        </label>
                    </p>
                    <p>
                        <div data-netlify-recaptcha="true"></div>
                    </p>
                    <p>
                        <button type="submit" className="contact_button">Send</button>
                    </p>
                </form>
            </div>
        </aside>
    )
}

export default Contact;