let showModal = document.querySelector(".modal-btn")
let modal = document.querySelector(".modal-overlay")
let closeButton = document.querySelector(".close-btn")
let showOfferButton = document.querySelector(".show-offer-btn")
let mainContent = document.querySelector('.main-content')

function modalOpen() {
    modal.classList.add('openModal')
}

function modalClosed() {
    modal.classList.remove('openModal')
}


showModal.addEventListener("click", modalOpen)
closeButton.addEventListener("click", modalClosed)
// modalUnderlay.addEventListener("click", modalClosed)
showOfferButton.addEventListener("click", () => {
    mainContent.innerHTML =
        `<div>Offer accepted</div>`
})