function generateContacts() {
    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('contacts');

    const address = document.createElement('h2');
    address.textContent = "Kordeckiego, Szczecin, Poland";

    const tel = document.createElement('h3');
    tel.textContent = "Tel: +48 987 654 321";

    const info = document.createElement('h4');
    info.textContent = "OPEN 24H";

    const img = document.createElement('img');
    img.src = "contacts.jpg";

    contactsDiv.appendChild(address);
    contactsDiv.appendChild(tel);
    contactsDiv.appendChild(info);
    contactsDiv.appendChild(img);

    const content = document.getElementById('content');
    content.appendChild(contactsDiv);
}

export default generateContacts;