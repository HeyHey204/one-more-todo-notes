function createAndAppendChild({ parent, className, tag = 'div' }) {
    let childEl = document.createElement(tag);
    childEl.className = className;
    parent.appendChild(childEl);
    return childEl;
}

let notesPage = new NotesPage();

notesPage.navigation.createButton.addEventListener('click', () => {
    notesPage.createNote();
})



