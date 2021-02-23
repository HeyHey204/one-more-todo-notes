class Note {
    constructor(mainpage, title, text, id) {
        this.id = id;

        this.noteElement = createAndAppendChild({
            parent: mainpage.notesField,
            className: 'note'
        })
        this.noteWrapper = createAndAppendChild({
            parent: this.noteElement,
            className: 'note__wrapper'
        })
        this.title = createAndAppendChild({
            parent: this.noteWrapper,
            className: 'note__title',
            tag: 'h2'
        })
        this.title.contentEditable = true;
        this.title.textContent = title;

        this.text = createAndAppendChild({
            parent: this.noteWrapper,
            className: 'note__text',
            tag: 'textarea'
        })
        this.text.placeholder = 'Something to do..';
        this.text.textContent = text;

        this.closeButton = createAndAppendChild({
            parent: this.noteElement,
            className: 'note__close-button button',
            tag: 'button'
        })
        this.closeButton.addEventListener('click', () => {
            mainpage.removeNote(this, mainpage)
        })
    }
};