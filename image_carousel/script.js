// select button elements
// attach event listeners to listen for click
// when click detected, change img src to another from the array
let imagesList = ["https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg", "https://picsum.photos/700/500", "https://picsum.photos/700/500?grayscale"]
var i = 0
var imageSource = document.querySelector(".carousel-container")
console.log(imageSource)
function loadImage() {
    imageSource.style.backgroundImage = `url(${imagesList[i]})`
}
loadImage()

let btns = document.querySelectorAll('.direction-btn')
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let direction = e.currentTarget.dataset.id
        if (direction === "forward") {
            i++
            loadImage()

        }
        else {
            i--
            loadImage()
        }
        console.log("i", i)
    })
})
