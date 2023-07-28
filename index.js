// TO OPEN AND CLOSE THE IMAGES IN THE GALLERY SECTION
document.querySelectorAll("#gallery img").forEach(galleryContainer =>{
    galleryContainer.onclick = () =>{
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = galleryContainer.getAttribute('src');
    }
});

let popupImage = document.querySelector(".popup-image i");

popupImage.addEventListener("click", function(){
    document.querySelector(".popup-image").style.display = "none";
});

