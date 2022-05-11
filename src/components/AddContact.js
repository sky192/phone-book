import React, { useState } from "react";

const AddContact = () => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const changeHandle = (e) => {
        console.log(e.target.value);
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <form action="">
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
            <button>Add Contact</button>
        </form>
    );
};

export default AddContact;
