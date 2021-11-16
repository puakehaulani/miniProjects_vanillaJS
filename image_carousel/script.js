// ajax call to get data from endpoint and store to array imagesList
let imagesList = ["https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg", "https://picsum.photos/700/500", "https://picsum.photos/700/500?grayscale"]


let imageSource = document.querySelector(".carousel-container")
function loadImage(i) {
    imageSource.style.backgroundImage = `url(${imagesList[i]})`
}
// select button elements

let btns = document.querySelectorAll('.direction-btn')
btns.forEach(function (btn) {
    let i = 0
    // attach event listeners to listen for click
    btn.addEventListener("click", function (e) {
        let direction = e.currentTarget.dataset.id
        // when click detected, change img src to next or prev from the array
        if (direction === "forward") {
            if (i === imagesList.length - 1) {
                i = 0
            }
            else {
                i++
            }
        }
        else {
            i--
            if (i < 0) {
                i = imagesList.length - 1
            }
        }
        loadImage(i)
    })
})

loadImage(0)