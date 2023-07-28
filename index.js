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

const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content');

function handleNavLinkClick(e) {
    e.preventDefault();

    contentSections.forEach((section) => {
        section.style.display = 'none';
    });

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.style.display = 'block';
    targetSection.classList.add('active');
}

navLinks.forEach((link) => {
    link.addEventListener('click', handleNavLinkClick);
});
