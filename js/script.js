const mainContent = document.getElementById("content")
const mainImage = document.getElementById("img")
const gallery = document.getElementById("gallery")


console.log(gallery)

// const randomNum = Math.round(Math.random()*10)

// console.log(randomNum)

const imagesurl = [
    "../images/luke-thornton-DGBklXJtgj0-unsplash.jpg", 
    "../images/slava-auchynnikau-DdjQaVxAqRA-unsplash.jpg"]

console.log(imagesurl.length)
console.log(imagesurl[2])

const randomNum = Math.floor(Math.random() * imagesurl.length)

imagesurl.src = imagesurl[randomNum]
imagesurl.forEach(url => {
    const newImage = document.createElement("img")
    newImage.src = url


gallery.appendChild(newImage)
})



