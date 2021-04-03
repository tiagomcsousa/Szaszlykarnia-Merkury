function generateHome() {

    const home = document.createElement('div');
    home.classList.add('home');

    const firstTitle = document.createElement('div');
    firstTitle.classList.add('first-title');
    firstTitle.textContent = 'THE BEST IN SZCZECIN';


    const imgHome = document.createElement('img');
    imgHome.src = 'imgmenu.jpeg';
    imgHome.classList.add('first-img');

    const bottomTitle = document.createElement('div');
    bottomTitle.classList.add('bottom-title');
    bottomTitle.textContent = '24H OPEN FOR YOU';
    bottomTitle.style.color = '#d51016';

    home.appendChild(firstTitle);
    home.appendChild(imgHome);
    home.appendChild(bottomTitle);

    return home;
}

function loadHome() {
    const content = document.getElementById('content');
    content.appendChild(generateHome());
}

export default loadHome;