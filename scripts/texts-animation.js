// const text = document.getElementById('movingText');
// // const text = document.getElementsByClassName('item')
// const div = document.getElementById('animation-text-div');

// let isMouseDown = false;


// text.addEventListener('mousedown', startFollowingMouse);
// document.addEventListener('mouseup', stopFollowingMouse);

// function startFollowingMouse(event) {
//     isMouseDown = true;
//     text.style.animation = 'none'; // Stop the animation when mouse is pressed down
//     alignTextWithMouse(event);
//     document.addEventListener('mousemove', mouse);
//     // text.style.fontSize = '1.1rem'
// }

// function stopFollowingMouse() {
//     isMouseDown = false;
//     text.style.animation = 'textMoveFront 30s  infinite'; // Start the animation when mouse is released
// }

// function alignTextWithMouse(event) {
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;

//     const parentRect = div.getBoundingClientRect();
//     const parentCenterX = parentRect.left + parentRect.width / 2;
//     const parentCenterY = parentRect.top + parentRect.height / 2;

//     const offsetX = mouseX - parentCenterX;
//     const offsetY = mouseY - parentCenterY;

//     text.style.left = (parentRect.width / 2 - text.offsetWidth / 2 + offsetX) + 'px';
//     text.style.top = (parentRect.height / 2 - text.offsetHeight / 2 + offsetY) + 'px';
// }

// function mouse(event) {
//     if (!isMouseDown) return;

//     const parentRect = div.getBoundingClientRect();
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;

//     const minX = parentRect.left;
//     const maxX = parentRect.right - text.offsetWidth;
//     const minY = parentRect.top;
//     const maxY = parentRect.bottom - text.offsetHeight;

//     const boundedX = Math.min(Math.max(mouseX, minX), maxX);
//     const boundedY = Math.min(Math.max(mouseY, minY), maxY);

//     text.style.left = (boundedX - parentRect.left - 200) + 'px';
//     text.style.top = (boundedY - parentRect.top - 200) + 'px';
//     // text.style.fontSize = '1.3rem'
// }



// let cursor = document.getElementById('cursor')
// document.addEventListener('mousemove', function(e){
//     let x = e.clientX
//     let y = e.clientY
//     cursor.style.top = y+'px'
//     cursor.style.left = x+'px'
// })


// const btn = document.getElementById('btn')
// const div = document.getElementById('pilots')

// btn.addEventListener('click', function(){
//     div.style.display = 'flex'
// })