class NotesPage {
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
                // let title = JSON.parse(localStorage.getItem('title'));
                // console.log(notes.title[id]);
                this.createNote(this, notes.title[id], notes.noteText[id]);
            })
        }
    }

    createNote(mainpage, title, noteText, cols, rows) {
        let note = new Note(mainpage, title, noteText, cols, rows, mainpage.count);

        this.notesArray.push(note);
        console.log(note);
        console.log(mainpage.count);
        return note;
    }

    removeNote(note, mainpage) {
        // this.notesArray[note.id].pop();
        console.log(mainpage.notesArray);
        console.log(note);
        note.note.remove();
        mainpage.notesArray.splice(note.id, 1);
        delete note.id;
        console.log(mainpage.notesArray);
        console.log(note);
    }

    updateLS(mainpage) {
        let notesArray = mainpage.notesArray;
        let idArr = [];
        let titleArr = [];
        let noteTextArr = [];
        let count = 0;
        if (notesArray) {
            notesArray.forEach(note => {
                idArr.push(count++);
                titleArr.push(note.title.textContent.toString());
                noteTextArr.push(note.noteText.value.toString());
            })
            localStorage.setItem('notes', JSON.stringify({ id: idArr, title: titleArr, noteText: noteTextArr }));
        }
    }

}