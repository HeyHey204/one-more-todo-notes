function createAndAppendChild({ parent, className, tag = 'div' }) {
    let childEl = document.createElement(tag);
    childEl.className = className;
    parent.appendChild(childEl);
    return childEl;
}

let mainPage = new MainPage();

mainPage.navigation.createButton.addEventListener('click', () => {
    mainPage.createNote(mainPage, 'New note', '');
})

setInterval(mainPage.updateLS, 10, mainPage)


