import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        jobTitle: '',
        company: '',
        message: '',
        attachment: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        for (let key in formData) {
            formDataObj.append(key, formData[key]);
        }

        fetch('/api/contact', {
            method: 'POST',
            body: formDataObj
        }).then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <label>Job Title</label>
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
            <label>Company</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} required />
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            <label>Attachment</label>
            <input type="file" name="attachment" onChange={handleChange} />
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;
