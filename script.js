document.addEventListener('DOMContentLoaded', () => {
    const gardenArea = document.getElementById('garden-area');
    
    // Add left click event listener to the garden area for dwarfs
    document.addEventListener('click', (event) => {
        if (event.button === 0) { // Left click
            createDwarf(event.clientX, event.clientY);
        }
    });
    
    // Add right click event listener for princesses
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault(); // Prevent the context menu from appearing
        createPrincess(event.clientX, event.clientY);
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
    
    // Function to create a princess at the clicked position
    function createPrincess(x, y) {
        const princess = document.createElement('div');
        princess.className = 'princess';
        
        // Position the princess at the clicked location
        princess.style.left = `${x - 30}px`;
        princess.style.top = `${y - 40}px`;
        
        // Add a random rotation for variety
        const rotation = Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees
        princess.style.transform = `rotate(${rotation}deg)`;
        
        // Add the princess to the garden area
        document.body.appendChild(princess);
        
        // Add a small animation when the princess appears
        princess.animate([
            { opacity: 0, transform: `scale(0) rotate(${rotation}deg)` },
            { opacity: 1, transform: `scale(1) rotate(${rotation}deg)` }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
    }
});