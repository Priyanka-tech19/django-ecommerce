$(document).ready(function () {
    console.log("Document ready!");

    // Submit event listener for the form
    $('#order-form').submit(function (event) {
        console.log("Form submission attempted");

        // Prevent the default form submission behavior
        event.preventDefault();
        console.log("Form submission prevented");

        // Validate the form
        if (validateForm()) {
            console.log("Form validation passed");

            // Unbind the submit event handler to prevent recursion
            $('#order-form').off('submit');

            // Submit the form programmatically
            this.submit();
        } else {
            console.log("Form validation failed");
        }
    });

    // Form validation
    function validateForm() {
        console.log("Validating form...");
        let isValid = true;

        // Validate name
        const nameInput = $('#name');
        const nameError = $('#name-error');
        const namePattern = /^[a-zA-Z\s]+$/; // Regular expression to match alphabets and spaces
        const nameValue = nameInput.val().trim();
        console.log("Name input value:", nameValue);
        if (nameValue === '') {
            nameError.text('Name is required');
            isValid = false;
            console.log("Name validation failed: Name is required");
        } else if (!namePattern.test(nameValue)) {
            nameError.text('Enter a valid name');
            isValid = false;
            console.log("Name validation failed: Enter a valid name");
        } else {
            nameError.text('');
            console.log("Name validation passed");
        }

        // Validate email
        const emailInput = $('#email');
        const emailError = $('#email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
        const emailValue = emailInput.val().trim();
        console.log("Email input value:", emailValue);
        if (emailValue === '') {
            emailError.text('Email is required');
            isValid = false;
            console.log("Email validation failed: Email is required");
        } else if (!emailPattern.test(emailValue)) {
            emailError.text('Enter a valid email address');
            isValid = false;
            console.log("Email validation failed: Enter a valid email address");
        } else {
            emailError.text('');
            console.log("Email validation passed");
        }

        // Validate address
        const addressInput = $('#address');
        const addressError = $('#address-error');
        const addressValue = addressInput.val().trim(); // Get trimmed value of address input
        console.log("Address input value:", addressValue);
        if (addressValue === '') {
            addressError.text('Address is required');
            isValid = false;
            console.log("Address validation failed: Address is required");
        } else {
            const addressPattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9\s,'-]*$/; // Regular expression for address validation
            if (!addressPattern.test(addressValue)) {
                addressError.text('Enter a valid address');
                isValid = false;
                console.log("Address validation failed: Enter a valid address");
            } else {
                addressError.text('');
                console.log("Address validation passed");
            }
        }

        // Validate ZIP code
        const zipInput = $('#zipcode');
        const zipError = $('#zipcode-error');
        const zipPattern = /^[1-9][0-9]{5}$/; // Regular expression for Indian ZIP code
        const zipValue = zipInput.val().trim();
        console.log("ZIP code input value:", zipValue);
        if (zipValue === '') {
            zipError.text('ZIP code is required');
            isValid = false;
            console.log("ZIP code validation failed: ZIP code is required");
        } else if (!zipPattern.test(zipValue)) {
            zipError.text('Enter a valid Indian ZIP code');
            isValid = false;
            console.log("ZIP code validation failed: Enter a valid Indian ZIP code");
        } else {
            zipError.text(''); // Clear the ZIP code error message
            console.log("ZIP code validation passed");
        }

        return isValid; // return the validation result
    }

    // Retrieve the total value from localStorage and set it to the input field with id 'total'
    const total = localStorage.getItem('total');
    $('#total').val(total);
});
