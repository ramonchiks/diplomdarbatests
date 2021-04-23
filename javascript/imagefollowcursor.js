 function moveImg(event) {
    var x = event.clientX;
    var y = event.clientY;
    var image = document.getElementById("image");
    image.style.left = x+'px';
    image.style.top = y+'px';
} 