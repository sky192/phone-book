const ContactList = ({ contacts }) => {
    return (
        <section>
            {contacts.map((contact) => {
                const { firstName, lastName, phoneNumber, id } = contact;
                return (
                    <div key={id}>
                        <div>
                            <p>
                                name: {firstName} {lastName}
                            </p>
                            <p>phone number: {phoneNumber}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
export default ContactList;
