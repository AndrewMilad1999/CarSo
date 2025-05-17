document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('actionButton');
    const car = document.querySelector('.car');
    
    // Create audio element for horn sound
    const hornSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBkCU1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTqO0/HPgDMGHm7A7+OZRA0PVqzn77BdGAg+ltryxnMpBSl+zPDhk0MLFluy6OyrWBIIPJPY88p2KwUkdcXw4JFCDB');
    
    // Button click handler
    button.addEventListener('click', function() {
        // Play horn sound
        hornSound.currentTime = 0;
        hornSound.play();
        
        // Add button animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    });
}); 