function createAndAppendChild({ parent, className, tag = 'div' }) {
    let childEl = document.createElement(tag);
    childEl.className = className;
    parent.appendChild(childEl);
    return childEl;
}

let notesPage = new NotesPage();

notesPage.navigation.createButton.addEventListener('click', () => {
    console.log(notesPage.notesArray);
    notesPage.createNote(notesPage, 'New note', '');
})

setInterval(notesPage.updateLS, 1111, notesPage)


