class App {
    constructor() {
        this.$form = document.querySelector('#form')
        this.$noteTitle = document.querySelector('#note-title')
        this.$noteBody = document.querySelector('#note-body')
        this.$formButton = document.querySelector('#post-button')

        this.addEventListeners();
    }
    addEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleFormClick(event);
        });
        this.$formButton.addEventListener('submit', event => {
            event.preventDefault
            console.log('clicked!')
        })
    }
    handleFormClick() {
        const isFormClicked = this.$form.contains(event.target);
        if (isFormClicked) {
            
        }
    }
}

new App()