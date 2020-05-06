class App {
    constructor() {
        this.notes = [];

        this.$form = document.querySelector('#form');
        this.$noteTitle = document.querySelector('#note-title');
        this.$noteBody = document.querySelector('#note-body');
        this.$postButton = document.querySelector('#post-button')
        this.$closeButton = document.querySelector('#close-button')

        this.addEventListeners();
    }
    addEventListeners() {
        this.$postButton.addEventListener('click', event => {
            this.openForm();

        });
        this.$closeButton.addEventListener('click', event => {
            this.closeForm();
        });
        this.$postButton.addEventListener('click', event => {
            event.preventDefault();
            const title = this.$noteTitle.value;
            const body = this.$noteBody.value;
            const hasNote = title || body;
            if (hasNote) {
                // this will add the note, and we destructure the newNote object for easier access
                this.addNote({ title, body })
            }
        });
    }
    // opens the note form
    openForm() {
        this.$form.classList.add('form-open')
        this.$noteTitle.style.display = 'block';
        this.$noteBody.style.display = 'block';
    }
    //closes the note form
    closeForm() {
        this.$form.classList.remove('form-open')
        this.$noteTitle.style.display = 'none';
        this.$noteBody.style.display = 'none'
    }
    // stores the new note in an object
    addNote(note) {
        const newNote = {
            title: note.title,
            body: note.body,
            color: 'pink',
            id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
        }
        this.notes = [...this.notes, newNote] // this spreads the array and allows the id to increment 
        this.displayNotes()
    }
    displayNotes() {
        if (this.notes.length > 0) {
        let $placeholderImage = document.querySelector('img')
        $placeholderImage.style.display = 'none'; // this removes the placeholder image
        }
    }
}
new App()