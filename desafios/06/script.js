const btnForm = document.querySelector('.btn-login')
const form = document.querySelector('form')

btnForm.addEventListener('click', (event) => {
    event.preventDefault()

    const fields = [...document.querySelectorAll('.input-block input')]

    fields.forEach(item => {
        if (item.value === '') form.classList.add('validate-error')
    })

    const formError = document.querySelector('.validate-error')
    
    if (formError) {
        formError.addEventListener('animationend', (event) => {
            if (event.animationName === 'vibration') {
                formError.classList.remove('validate-error')
            }
        })
    } else {
        form.classList.add('form-hide')
    }
})

form.addEventListener('animationstart', (event) => {
    if (event.animationName === 'down') {
        document.querySelector('body').style.overflow = 'hidden'
    }
})

form.addEventListener('animationend', (event) => {
    if (event.animationName === 'down') {
        form.style.display = 'none'
        document.querySelector('body').style.overflow = 'none'
    }
})
