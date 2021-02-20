class NotesPage {
    constructor() {
        this.pageMain = createAndAppendChild({
            parent: document.body,
            className: 'page-main',
            tag: 'main'
        });

        this.navigation = createAndAppendChild({
            parent: this.pageMain,
            className: 'navigation',
            tag: 'nav'
        })
        this.navigation.createButton = createAndAppendChild({
            parent: this.navigation,
            className: 'navigation__create-button button',
            tag: 'button'
        })
        this.notesField = createAndAppendChild({
            parent: this.pageMain,
            className: 'notes-field'
        })
        this.pageFooter = createAndAppendChild({
            parent: document.body,
            className: 'page-footer',
            tag: 'footer'
        })
        this.pageFooter.info = createAndAppendChild({
            parent: this.pageFooter,
            className: 'page-footer__info',
            tag: 'h3'
        })
        this.pageFooter.info.textContent = 'alexger204@gmail.com';
    }
    createNote() {
        console.log(this.pageMain);
        return new Note(this.notesField);
    }
    createNote(title, noteText, cols, rows) {
        return new Note(this.notesField, title, noteText, cols, rows);
    }

}