// NOTE: see ./OLD/4mysite-PRE-CLEANUP.js
async function updateVisitorCount() {
  const API_URL = 'https://bscz76jee1.execute-api.us-east-1.amazonaws.com/prod/counter';
  
  try {
    console.log('Fetching visitor count from:', API_URL);
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    // Parse the API response
    const apiResponse = await response.json();
    console.log('API response:', apiResponse);
    const responseBody = JSON.parse(apiResponse.body); // Unpack the nested JSON
    console.log(`responseBody:`, responseBody);
    const count = responseBody.count;
    console.log(`count:`, count);
    
    document.getElementById('visitor-counter').textContent = `Visitors: ${count}`;
    
  } catch (error) {
    console.error('Visitor counter error:', error);
    document.getElementById('visitor-counter').textContent = 'Visitors: 1,000+';
  }
}

// Essential: Run when page loads
window.addEventListener('DOMContentLoaded', updateVisitorCount);

// Optional: Refresh counter periodically (every 5 minutes)
// NOTE: updates counter value of same user visit
// setInterval(updateVisitorCount, 300000);
