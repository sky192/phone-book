import { useEffect, useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        // console.log(contact);
        setContacts([
            ...contacts,
            { id: Math.ceil(Math.random() * 100), ...contact },
        ]);
    };

    // saving data in local storage
    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem("contacts"));
        if (savedContacts) setContacts(savedContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className="App">
            <h1>Phone Book</h1>
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} id={contacts.id} />
        </div>
    );
}

export default App;
