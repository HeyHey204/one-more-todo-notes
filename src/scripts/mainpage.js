class MainPage {
    constructor() {
        this.count = 0;
        this.notesArray = [];

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
        this.navigation.createButton.title = 'New note';

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
        this.pageFooter.info.textContent = 'Useless footer info just for fun';

        let notes = JSON.parse(localStorage.getItem('notes'));
        if (notes) {
            notes.id.forEach((id) => {
                this.createNote(this, notes.title[id], notes.text[id]);
            })
        }
    }

    createNote(mainPage, title, text) {
        let note = new Note(mainPage, title, text, mainPage.notesArray.length); //array length as id lol 
        this.notesArray.push(note);
        return note;

    }

    removeNote(note, mainPage) {
        mainPage.notesArray.forEach(item => {
            item.id = mainPage.notesArray.indexOf(item);
        })
        note.noteElement.remove();
        mainPage.notesArray.splice(note.id, 1);
    }

    updateLS(mainPage) {
        let notesArray = mainPage.notesArray;
        let idsArr = [];
        let titlesArr = [];
        let textsArr = [];
        mainPage.count = 0;
        if (notesArray) {
            notesArray.forEach(note => {
                idsArr.push(mainPage.count++);
                note.id = mainPage.count;
                titlesArr.push(note.title.textContent.toString());
                textsArr.push(note.text.value.toString());
            })
            localStorage.setItem('notes', JSON.stringify({ id: idsArr, title: titlesArr, text: textsArr }));
        }
    }

}