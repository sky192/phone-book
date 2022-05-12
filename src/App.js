import { useState } from "react";
import AddContact from "./components/AddContact";

function App() {
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        // console.log(contact);
        setContacts([
            ...contacts,
            { id: Math.ceil(Math.random() * 100), ...contact },
        ]);
    };
    return (
        <div className="App">
            <h1>Phone Book</h1>
            <AddContact addContactHandler={addContactHandler} />
        </div>
    );
}

export default App;
