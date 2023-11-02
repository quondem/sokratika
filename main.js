const btn = document.querySelector('.introduce__start')
const body = document.querySelector('body')
const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.popup__close')

btn.addEventListener('click', function () {
    body.classList.add('lock')
    popup.classList.remove('hidden')
})
popup.addEventListener('click', function (e) {
    if (e.target.closest('.popup__close') || !e.target.closest('.popup__content')) {
        closePopup()
    }
})
function closePopup() {
    body.classList.remove('lock')
    popup.classList.add('hidden')
}