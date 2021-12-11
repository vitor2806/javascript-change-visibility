const button = document.querySelector('button')
const container = document.querySelector('.container')

button.onclick = function () {
    container.style.visibility = 'unset'
}

document.addEventListener('keydown', function(event) {
    const realKey = event.key === 'Escape'
    if (realKey) {
        container.style.visibility = 'hidden'
    }
})