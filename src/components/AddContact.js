import React, { useState } from "react";

const AddContact = ({ addContactHandler }) => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    // function for handling changes on user inputs
    const changeHandle = (e) => {
        console.log(e.target.value);
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    // function for handling submit event
    const submitForm = (e) => {
        e.preventDefault();
        addContactHandler(contact);
        setContact({ firstName: "", lastName: "", email: "" });
    };

    return (
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={contact.firstName}
                    onChange={changeHandle}
                />
            </div>
            <div>
                <label htmlFor="">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={contact.lastName}
                    onChange={changeHandle}
                />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={changeHandle}
                />
            </div>
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default AddContact;
