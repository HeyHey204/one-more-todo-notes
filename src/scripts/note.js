class Note {
    constructor(pageMain, title = 'Node title', noteText = '', cols = 30, rows = 10) {
        this.note = createAndAppendChild({
            parent: pageMain,
            className: 'note'
        })
        this.noteWrapper = createAndAppendChild({
            parent: this.note,
            className: 'note__wrapper'
        })
        this.title = createAndAppendChild({
            parent: this.noteWrapper,
            className: 'note__title',
            tag: 'h2'
        })
        this.title.contentEditable = true;
        this.title.textContent = title;

        this.noteText = createAndAppendChild({
            parent: this.noteWrapper,
            className: 'note__text',
            tag: 'textarea'
        })
        this.noteText.placeholder = 'Something to do..';
        this.noteText.textContent = noteText;
        this.noteText.cols = cols;
        this.noteText.rows = rows;

        this.closeButton = createAndAppendChild({
            parent: this.note,
            className: 'note__close-button button',
            tag: 'button'
        })
        this.closeButton.addEventListener('click', () => {
            this.note.remove();
        })
    }
};