const button = document.querySelector('button')
const container = document.querySelector('.container')

button.addEventListener('click', function() {
    container.style.visibility = 'unset'
})

container.addEventListener('click', function() {
    container.style.visibility = 'hidden'
}) 