const button = document.querySelector('button')
const container = document.querySelector('.container')

button.onclick = function () {
    container.style.visibility = 'unset'
}

document.addEventListener('keydown', function(event) {
    const realKey = event.key === 'Escape'
    const isInvisible = container.style.visibility === 'unset'
    
    if (realKey && isInvisible) {
        container.style.visibility = 'hidden'
    }
})