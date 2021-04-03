function generateMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const szaszlykDiv = document.createElement('div');
    szaszlykDiv.classList.add('meal');

    const szaszlykH = document.createElement('h2');
    szaszlykH.textContent = "Szaszłyk";
    const szaszlykP = document.createElement('p');
    szaszlykP.textContent = "our specialty";
    const szaszlykImg = document.createElement('img');
    szaszlykImg.src = "firstImg.jpeg";

    szaszlykDiv.appendChild(szaszlykH);
    szaszlykDiv.appendChild(szaszlykP);
    szaszlykDiv.appendChild(szaszlykImg);

    const chickenDiv = document.createElement('div');
    chickenDiv.classList.add('meal');

    const chickenH = document.createElement('h2');
    chickenH.textContent = "Grilled Chicken";
    const chickenP = document.createElement('p');
    chickenP.textContent = "a classic, everywhere";
    const chickenImg = document.createElement('img');
    chickenImg.src = "Grilled-Leg-Quarters.jpg";

    chickenDiv.appendChild(chickenH);
    chickenDiv.appendChild(chickenP);
    chickenDiv.appendChild(chickenImg);

    const kielbasaDiv = document.createElement('div');
    kielbasaDiv.classList.add('meal');

    const kielbasaH = document.createElement('h2');
    kielbasaH.textContent = "Kiełbasa";
    const kielbasaP = document.createElement('p');
    kielbasaP.textContent = "traditional from Poland";
    const kielbasaImg = document.createElement('img');
    kielbasaImg.src = "kielbasa.jpg";

    kielbasaDiv.appendChild(kielbasaH);
    kielbasaDiv.appendChild(kielbasaP);
    kielbasaDiv.appendChild(kielbasaImg);


    const kidsDiv = document.createElement('div');
    kidsDiv.classList.add('meal');

    const kidsH = document.createElement('h2');
    kidsH.textContent = "Kid's menu";
    const kidsP = document.createElement('p');
    kidsP.textContent = "there's a child inside each one of us";
    const kidsImg = document.createElement('img');
    kidsImg.src = "ksurprise.jpg";

    kidsDiv.appendChild(kidsH);
    kidsDiv.appendChild(kidsP);
    kidsDiv.appendChild(kidsImg);

    menuDiv.appendChild(szaszlykDiv);
    menuDiv.appendChild(chickenDiv);
    menuDiv.appendChild(kielbasaDiv);
    menuDiv.appendChild(kidsDiv);

    const content = document.getElementById('content');
    content.appendChild(menuDiv);

}

export default generateMenu;