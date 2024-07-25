let currentIndex = 1;
setInterval(() => {
    document.getElementById(`carousel-${currentIndex}`).checked = true;
    currentIndex = currentIndex === 3 ? 1 : currentIndex + 1;
}, 5000); // Change slide every 5 seconds