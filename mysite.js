// Update this with your API Gateway URL
const API_URL = 'https://bscz76jee1.execute-api.us-east-1.amazonaws.com/prod/counter';

// Function to fetch and update the counter
async function updateCounter() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        document.getElementById('visitor-counter').textContent = 
            `Visitors: ${data.count}`;
    } catch (error) {
        console.error('Error updating visitor count:', error);
        document.getElementById('visitor-counter').textContent = 
            'Visitor count unavailable';
    }
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', updateCounter);