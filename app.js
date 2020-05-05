class App {
    constructor() {
        this.$form = document.querySelector('#form')
        this.$noteTitle = document.querySelector('#note-title')
        this.formButton = document.querySelector('#post-button')

        this.addEventListeners();
    }
    addEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleFormClick(event);
        });
        this.$form.addEventListener('click', event => {
            event.preventDefault
            console.log('clicked!')
        })
    }
}

new App()