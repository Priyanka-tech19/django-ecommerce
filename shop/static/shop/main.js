$(document).ready(function() {
    // Retrieve cart data from localStorage or initialize an empty object if null
    var cart = JSON.parse(localStorage.getItem('cart')) || {};

    // Function to update the localStorage with the current cart
    function updateLocalStorageCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Function to update the cart count displayed on the page
    function updateCartCount() {
        // Calculate the total quantity of items in the cart
        var totalQuantity = Object.values(cart).reduce((total, item) => total + item[0], 0);
        // Update the cart count in the HTML
        document.getElementById("cart").innerHTML = "Cart(" + totalQuantity + ")";
    }

    // Function to display the cart items on the page
    function displayCart() {
        var total = 0;
        // Clear the current item list
        $('#item_list').empty();

        // Iterate over each item in the cart
        for (var itemId in cart) {
            if (cart.hasOwnProperty(itemId)) {
                var item = cart[itemId];
                var name = item[1];
                var quantity = item[0];
                var price = parseFloat(item[2]);
                var imageUrl = item[3];

                // Check if the price is valid (not null or undefined)
                if (price !== null && price !== undefined) {
                    // Calculate the total price for each item and accumulate it
                    var totalPriceForItem = price;
                    total += totalPriceForItem;
                    // Calculate the cost per item
                    var costPerItem = totalPriceForItem / quantity;

                    // Create HTML string for each item with its price and image
                    var itemString = `
                        <div class="item-box">
                            <div class="d-flex align-items-center">
                                <img src="${imageUrl}" class="mr-3" style="width: 150px; height: 125px;">
                                <div>
                                    <span class="item-name">${name}</span><br>
                                    <span class="price">₹${costPerItem.toFixed(2)}</span><br>
                                    <span class="quantity">Qty: ${quantity}</span><br>
                                    <span class="total-price">${totalPriceForItem.toFixed(2)}₹</span>
                                </div>
                            </div>
                        </div>`;
                    // Append the item HTML to the item list
                    $('#item_list').append(itemString);
                } else {
                    // Log an error if the price is invalid
                    console.error("Invalid price for item:", name);
                }
            }
        }

        // Format the total to have two decimal places
        var formattedTotal = total.toFixed(2);
        // Create HTML for the total price display
        var totalPriceHTML = `<li class="list-group-item d-flex justify-content-between align-items-center"><b>Your Total</b><b>${formattedTotal} ₹</b></li>`;
        // Append the total price HTML to the item list
        $('#item_list').append(totalPriceHTML);
        // Store the total value in localStorage
        localStorage.setItem('total', formattedTotal);
        // Update the cart count
        updateCartCount();
    }

    // Event listener for adding items to the cart
    $(document).on('click', '.atc', function(event) {
        var item_id = $(this).data('id');
        var quantity, price, name, image;

        // Check if the item ID is defined
        if (typeof item_id !== 'undefined') {
            image = $('#image' + item_id).val() || '';
            var priceElement = document.getElementById("price" + item_id);

            // Check if the price element exists
            if (priceElement !== null) {
                // Update the cart if the item is already present
                if (cart[item_id] !== undefined) {
                    quantity = cart[item_id][0] + 1;
                    cart[item_id][0] = quantity;
                    cart[item_id][2] = (cart[item_id][2] || 0) + parseFloat(priceElement.innerHTML);
                } else {
                    // Add a new item to the cart
                    quantity = 1;
                    price = parseFloat(priceElement.innerHTML);
                    name = document.getElementById("nm" + item_id).innerHTML;
                    cart[item_id] = [quantity, name, price, image];
                }

                // Update the localStorage and display the updated cart
                updateLocalStorageCart();
                displayCart();
            } else {
                // Log an error if the price element is not found
                console.error("Price element not found for item ID:", item_id);
            }
        } else {
            // Log an error if the item ID is undefined
            console.error("Item ID is undefined");
        }
    });

    // Initial display of cart when the page loads
    displayCart();
});
