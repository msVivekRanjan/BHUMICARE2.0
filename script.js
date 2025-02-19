function redirectToLogin() {
    window.location.href = 'login.html';
}

// Add this function to handle logout
function logout() {
    localStorage.removeItem('userData');
    window.location.href = 'index.html';
}

// Add event listener for logout button if it exists
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});