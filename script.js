document.addEventListener('DOMContentLoaded', () => {
    const gardenArea = document.getElementById('garden-area');
    
    // Add click event listener to the garden area
    document.addEventListener('click', (event) => {
        createDwarf(event.clientX, event.clientY);
    });
    
    // Function to create a dwarf at the clicked position
    function createDwarf(x, y) {
        const dwarf = document.createElement('div');
        dwarf.className = 'dwarf';
        
        // Position the dwarf at the clicked location
        // Adjust position to center the dwarf on the click point
        dwarf.style.left = `${x - 30}px`;
        dwarf.style.top = `${y - 40}px`;
        
        // Add a random rotation for variety
        const rotation = Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees
        dwarf.style.transform = `rotate(${rotation}deg)`;
        
        // Add the dwarf to the garden area
        document.body.appendChild(dwarf);
        
        // Optional: Add a small animation when the dwarf appears
        dwarf.animate([
            { opacity: 0, transform: `scale(0) rotate(${rotation}deg)` },
            { opacity: 1, transform: `scale(1) rotate(${rotation}deg)` }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
    }
});