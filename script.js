document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Toggle Main Menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});

// Toggle Submenus
function toggleSub(id, siblingId = null) {
    const target = document.getElementById(id);
    
    // Logic: If opening one, close the other
    if (siblingId) {
        const sibling = document.getElementById(siblingId);
        if (sibling) sibling.classList.remove('active');
    }

    target.classList.toggle('active');
    
    // Prevents clicks from closing the whole menu
    event.stopPropagation();
}
