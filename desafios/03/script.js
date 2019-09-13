const btnForm = document.querySelector('.btn-login')
const form = document.querySelector('form')

btnForm.addEventListener('click', (event) => {
    event.preventDefault()
    form.classList.add('form-hide')
})