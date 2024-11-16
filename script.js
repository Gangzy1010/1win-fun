// script.js

function startCaptcha() {
    // Hide the button and show the spinner
    const button = document.querySelector('.cta-button');
    const spinner = document.getElementById('loading-spinner');
    const checkmark = document.getElementById('checkmark');
    const successMessage = document.getElementById('success-message');

    button.style.display = 'none';
    spinner.parentElement.style.display = 'flex';
    
    // Simulate CAPTCHA processing time with a timeout
    setTimeout(() => {
        // Hide the spinner and show the checkmark
        spinner.style.display = 'none';
        checkmark.style.display = 'flex';

        // Show success message
        successMessage.textContent = 'Verification successful!';
        successMessage.style.display = 'block';

        // Redirect to the main site after a delay
        setTimeout(() => {
            window.location.href = "https://1wbtsu.top/casino/list?open=register&sub1=ppc&sub2=new&sub3=himIN"; // Redirect URL
        }, 1500); // 1.5 seconds delay before redirect
    }, 2000); // Simulated processing time (2 seconds)
}
