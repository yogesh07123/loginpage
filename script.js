document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Form validation function
    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                showError(input, `${input.placeholder} is required`);
                isValid = false;
            } else {
                removeError(input);
            }
        });
        return isValid;
    }

    // Show error message
    function showError(input, message) {
        removeError(input);
        const errorElement = document.createElement('small');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        errorElement.style.color = 'red';
        input.style.borderColor = 'red';
        input.insertAdjacentElement('afterend', errorElement);
    }

    // Remove error message
    function removeError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            input.style.borderColor = '';
            errorElement.remove();
        }
    }

    // Event listeners for form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(loginForm)) {
            alert('Login form is valid');
            // Proceed with form submission (e.g., AJAX call)
        }
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(signupForm)) {
            alert('Sign-Up form is valid');
            // Proceed with form submission (e.g., AJAX call)
        }
    });
});
