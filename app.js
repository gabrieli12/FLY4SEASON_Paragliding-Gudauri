// let items = document.querySelectorAll('.slider .list .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');
// let thumbnails = document.querySelectorAll('.thumbnail .item');

// // config param
// let countItem = items.length;
// let itemActive = 0;
// // event next click
// next.onclick = function(){
//     itemActive = itemActive + 1;
//     if(itemActive >= countItem){
//         itemActive = 0;
//     }
//     showSlider();
// }
// //event prev click
// prev.onclick = function(){
//     itemActive = itemActive - 1;
//     if(itemActive < 0){
//         itemActive = countItem - 1;
//     }
//     showSlider();
// }
// // auto run slider
// let refreshInterval = setInterval(() => {
//     next.click();
// }, 5000)
// function showSlider(){
//     // remove item active old
//     let itemActiveOld = document.querySelector('.slider .list .item.active');
//     let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
//     itemActiveOld.classList.remove('active');
//     thumbnailActiveOld.classList.remove('active');

//     // active new item
//     items[itemActive].classList.add('active');
//     thumbnails[itemActive].classList.add('active');

//     // clear auto time run slider
//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(() => {
//         next.click();
//     }, 10000)
// }

// // click thumbnail
// thumbnails.forEach((thumbnail, index) => {
//     thumbnail.addEventListener('click', () => {
//         itemActive = index;
//         showSlider();
//     })
// })








let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Configuration (modify as needed)
let countItem = items.length;
let itemActive = 0;
let autoplayInterval = null; // Use null for initial state

// Event listeners with performance optimizations
next.addEventListener('click', handleNextClick);
prev.addEventListener('click', handlePrevClick);
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => handleThumbnailClick(index));
});

function handleNextClick() {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}

function handlePrevClick() {
    itemActive = (itemActive - 1 + countItem) % countItem; // Ensure non-negative index
    showSlider();
}

function handleThumbnailClick(index) {
    if (index !== itemActive) {
        itemActive = index;
        showSlider();
    }
}

function showSlider() {
    // Remove active states efficiently using direct DOM manipulation
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    for (let i = 0; i < countItem; i++) {
        if (i !== itemActive) {
            items[i].classList.remove('active');
            thumbnails[i].classList.remove('active');
        }
    }

    // Autoplay handling (optional)
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
    }
    autoplayInterval = setTimeout(handleNextClick, 10000); // Use `setTimeout` for non-blocking autoplay
}

// Optional: Pre-calculate references to avoid repeated DOM lookups
// let itemActiveEls = items; // Uncomment if performance is critical

// Autoplay initialization (optional)
// autoplayInterval = setInterval(handleNextClick, 5000); // Use `setInterval` for continuous autoplay
