import React, { Component } from "react"
import ContactsFilter from "./ContactsFilter"
import Form from "./Form"
import Contact from "./Contact"
import { createContact, fetchContactList, deleteContact} from './contactsGateway'

// const baseUrl = "https://crudcrud.com/api/1280b7e60d0d4cb9849d305655430af5/contacts";
class ContactList extends Component {
    state = {
        contacts: [
            // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    }
    componentDidMount() {
        this.fetchContacts();
    }

    fetchContacts = () =>
    fetchContactList () 
    .then(contactsList => 
            this.setState({
                contacts: contactsList,
            }))
    

    onCreate = ({ name, number }) => {
        //1. Create new object
        //2. Add new object
        //3.  Contacts
        const { contacts } = this.state;
        if (contacts.find(contact =>
            contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is a contacts.`);
        } else {
            const newContact = {
                name,
                number,
            };
            createContact(newContact)
            .then(() => fetchContactList())

            // fetch(baseUrl, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json; utc-8'
            //     },
            //     body: JSON.stringify(newContact)
            // }).then(response => {
            //     if (response.ok) {
            //         this.fetchContactList();
            //     } else {
            //         throw new Error ('Failed to  delete contact')
            //     }
            // })

            // const updateContacts = contacts.concat(newContact)
            // this.setState({ contacts: updateContacts })
        }
    }
    handleDelete = (id) => {
        // console.log(this.state);
        // const { contacts } = this.state;
        // const deleteContact = contacts.filter(contact => contact.id !== id)
        // this.setState({ contacts: deleteContact }) //???????????????????????? ???????????????? ?????? ???? ?? updateContacts

        // fetch(`${baseUrl}/${id}`, {
        //     method: 'DELETE'
        //    }).then(response => {
        //        if(response.ok) {
        //            this.fetchContactList();
        //        } else {
        //            throw new Error('Failed to delete contact')
        //        }
        //    })
        deleteContact(id)
        .then(()=> this.fetchContacts())
    }

    handleChangeFilter = event => {
        event.preventDefault();
        this.setState({
            filter: event.target.value
        })
    }
    render() {
        const filteredContact = this.state.contacts
            .filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
            .map(contact => <Contact key={contact.id} {...contact} onDelete={this.handleDelete} />)
        return (
            <div>
                <Form onCreate={this.onCreate} />
                <h1>Contacts</h1>
                <ContactsFilter filterText={this.state.filter} onChange={this.handleChangeFilter} />
                <ul>
                    {filteredContact}
                </ul>
            </div>
        )
    }
}

export default ContactList
