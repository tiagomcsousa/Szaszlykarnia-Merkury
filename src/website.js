function generateMenuLink() {

    const menu = document.createElement('p');
    menu.classList.add('p-menu');
    menu.textContent = 'MENU';
    menu.addEventListener('click', (e) => {
        alert('menu');
    });

    return menu;
}

function generateContactsLink() {
    const contacts = document.createElement('p');
    contacts.classList.add('p-contacts');
    contacts.textContent = 'CONTACTS';
    contacts.addEventListener('click', (e) => {
        alert('contacts');
    });

    return contacts;
}

function generateLogo() {
    const logoImg = document.createElement('img');
    logoImg.classList.add('logo');
    logoImg.src = 'szaszlyk-logo.png';

    return logoImg;
}

function generateFooterContent() {
    const footer = document.getElementById('footer');

    const notOfficial = document.createElement('p');
    notOfficial.classList.add('not-official');
    notOfficial.textContent = 'This website is not official!';

    const doneBy = document.createElement('p');
    doneBy.classList.add('done-by');
    doneBy.textContent = ' tiagomcsousa ';

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    footer.appendChild(notOfficial);

    doneBy.appendChild(githubIcon);
    footer.appendChild(doneBy);
}

function initalizePage() {
    const header = document.getElementById('header');


    header.appendChild(generateMenuLink());
    header.appendChild(generateLogo());
    header.appendChild(generateContactsLink());

    generateFooterContent();
}

export default initalizePage;