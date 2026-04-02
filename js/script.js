const popup = document.getElementById('popup');
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');


openPopup.addEventListener('click', () => {
    popup.classList.add('open');
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('open');
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('open')
    }
});