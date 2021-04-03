import generateMenu from './menu';
import loadHome from './home';
import generateContacts from './contacts';

const content = document.getElementById('content');

function generateMenuLink() {

    const menu = document.createElement('p');
    menu.classList.add('p-menu');
    menu.textContent = 'MENU';
    menu.addEventListener('click', (e) => {
        menu.style.color = 'black';
        const contacts = document.querySelector('.p-contacts');
        contacts.style.color = 'white';
        content.textContent = '';
        generateMenu();
    });

    return menu;
}

function generateContactsLink() {
    const contacts = document.createElement('p');
    contacts.classList.add('p-contacts');
    contacts.textContent = 'CONTACTS';
    contacts.addEventListener('click', (e) => {
        const menu = document.querySelector('.p-menu');
        menu.style.color = 'white';
        contacts.style.color = 'black';
        content.textContent = '';
        generateContacts();
    });

    return contacts;
}

function generateLogo() {
    const logoImg = document.createElement('img');
    logoImg.classList.add('logo');
    logoImg.src = 'szaszlyk-logo.png';
    logoImg.addEventListener('click', (e) => {
        const menu = document.querySelector('.p-menu');
        const contacts = document.querySelector('.p-contacts');
        menu.style.color = 'white';
        contacts.style.color = 'white';
        content.textContent = '';
        loadHome();
    });

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
    doneBy.addEventListener('click', (e) => {
        window.location.replace("http://github.com/tiagomcsousa");
    });

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');
    githubIcon.addEventListener('click', (e) => {
        window.location.replace("http://github.com/tiagomcsousa");
    });

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