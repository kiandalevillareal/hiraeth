document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
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

    // const itemContainers = document.querySelectorAll('.itemContainer');

    // itemContainers.forEach(itemContainer => {
    //     itemContainer.addEventListener('mouseenter', () => {
    //         itemContainer.style.backgroundColor = 'red';
    //     });

    //     itemContainer.addEventListener('mouseleave', () => {
    //         itemContainer.style.backgroundColor = ''; // Reset to default
    //     });
    // });
});