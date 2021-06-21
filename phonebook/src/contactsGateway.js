const baseUrl = "https://crudcrud.com/api/ec8b67dc22d346fca94ba1b1cf8972e7/contacts";

export const createContact = contactData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;utc-8'
        },
        body: JSON.stringify(contactData)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
    })
}

export const fetchContactList = () => {
    return fetch(baseUrl).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(contactsList => {
        return contactsList.map(({ _id, ...contacts }) => ({
            id: _id,
            ...contacts,
        }))
    })
}

export const deleteContact = (contactId) => {
    return fetch(`${baseUrl}/${contactId}`, {
        method: 'DELETE'
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
    })
}


