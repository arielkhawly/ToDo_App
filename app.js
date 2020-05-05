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
        document.body.addEventListener('click', event => {
            this.handleFormClick(event);

        });
        this.$postButton.addEventListener('submit', event => {
            event.preventDefault()
            console.log('clicked!')
            // this.addNote()
        })
        //    addNote(note) {
        //        const newNote = {
                    const title = this.$noteTitle.value
                    const body = this.$noteBody.value
                    const hasNote = 
                    if (hasNote)

        //        }

    }
    handleFormClick() {
        const isFormClicked = this.$postButton.contains(event.target);
        if (isFormClicked) {
            this.openForm()
        }
        else {
            this.closeForm()
          

        }
    }
    openForm() {
        console.log('form open')
        this.$form.classList.add('form-open')
        this.$noteTitle.style.display = 'block';
        this.$noteBody.style.display = 'block';
    }
    closeForm() {
        this.$form.classList.remove('form-open')
        this.$noteTitle.style.display = 'none';
        this.$noteBody.style.display = 'none'
        this.$closeButton.style.display = 'none';
        let openButton = document.createElement('BUTTON');
        let openText = document.createTextNode('Open');
        openButton.appendChild(openText);
        document.body.appendChild(openButton)
     
        console.log('form closed')
    }

}
new App()