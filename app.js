class App {
    constructor() {
        this.notes = [];

        this.$form = document.querySelector('#form')
        this.$noteTitle = document.querySelector('#note-title')
        this.$noteBody = document.querySelector('#note-body')
        this.$formButtons = document.querySelector('#form-buttons')

        this.addEventListeners();
    }
    addEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleFormClick(event);

        });
        this.$formButtons.addEventListener('submit', event => {
            event.preventDefault()
            console.log('clicked!')
            this.addNote()
        })
       addNote(note) {
           const newNote = {
            
           }
          
       }
    }
    handleFormClick() {
        const isFormClicked = this.$form.contains(event.target);
        if (isFormClicked) {
            this.openForm()
        }
        else {
            this.closeForm()
        }
    }
    openForm() {
        this.$form.classList.add('form-open')
        this.$noteTitle.style.display = 'block';
        this.$noteBody.style.display = 'block';
    }
    closeForm() {
        this.$form.classList.remove('form-open')
        this.$noteTitle.style.display = 'none';
        this.$formButtons.style.display = 'none';
}

}
new App()