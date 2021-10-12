import React from 'react'
import './feedback.css'
import {useHistory} from 'react-router-dom'

function Feedback() {
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/')
    }

    return (
        <div className="feedback">
            <div className="container has-text-centered">
            <h1 className="title">Feedback Form</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <h2>Name</h2>
                    <input type="text" name="name" id="name" placeholder="Name" required/>
                </div>
                <div className="field">
                    <h2>Email</h2>
                    <input type="email" name="email" placeholder="Email Address" id="email" required/>
                </div>
                <div className="field">
                    <h2>Please provide your feedback</h2>
                    <input type="text" name="feed" id="feed" placeholder="How useful this website to you ?" required/>
                </div>
                <div className="field">
                <h2>Do you have suggestions on what we can do to provide you with a better service?</h2>
                <textarea name="suggestions" id="suggestions" cols="30" rows="5" placeholder="Any suggestion to improve our services "></textarea>
                </div>
                <div className="field">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Feedback