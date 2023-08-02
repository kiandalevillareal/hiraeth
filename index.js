document.addEventListener('DOMContentLoaded', () => {
    
    // // FOR THE NAV BAR
    // const navLinks = document.querySelectorAll('.nav-link');
    // const contentSections = document.querySelectorAll('.content-section');

    // const onClickNavLinks = (event) => {
    //     event.preventDefault(); 

    //     contentSections.forEach((section) => {
    //         section.style.display = 'none';
    //     });

    //     navLinks.forEach((link) => {
    //         link.style.backgroundColor = 'white ';
    //     });

    //     const targetSectionId = event.target.getAttribute('href');
    //     const targetSection = document.querySelector(targetSectionId);
    //     if (targetSection) {
    //         targetSection.style.display = 'block';
    //         event.target.style.backgroundColor = '#aed6d3';
    //         }
    // };

    // navLinks.forEach((link) => {
    //     link.addEventListener('click', onClickNavLinks);
    // });

    // FOR THE IMAGES
    
    const images = document.querySelectorAll('.gallery img');
    images.forEach(e => {
        e.onclick = () =>{
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = e.getAttribute('src');
        }
    })

    const popupImage = document.querySelector(".popup-image .fa-circle-xmark");
    popupImage.addEventListener("click", function(){
        document.querySelector(".popup-image").style.display = "none";
    });
});