const baseUrl = "https://crudcrud.com/api/993bd2ade14b4a42824714fbeca53bcb/contacts";

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


