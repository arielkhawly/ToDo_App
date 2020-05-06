class App {
    constructor() {
        this.notes = [];
        this.$notes = document.querySelector('#all-notes')
        this.$placeholderImage = document.querySelector('#placeholder')
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
        let hasNotes = this.notes.length > 0;
        this.$placeholderImage.style.display = hasNotes ? 'none' : 'flex';
        this.$notes.innerHTML = this.notes.map(note => `
        <div style='background: ${note.color}'>
        <div> Title: ${note.title} </div>
        <div> Get Done: ${note.body} </div>
        <div class='toolbar'>
        <button>Edit</button>
        <button>Delete</button>
        </div>
        `
        )
    }
}
new App()