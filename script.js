// Welcome message
console.log("Welcome to Moaz Portfolio!");

// Smooth navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigation:", this.textContent);
    });
});
