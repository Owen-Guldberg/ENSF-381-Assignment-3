document.addEventListener("DOMContentLoaded", function() {
    const shoppingCart = document.getElementById('shopping-cart');
    const cartItemsQuantities = {}; // Product quantities

    // Event listener for when add to cart button is pressed
    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const productName = product.querySelector('h2').innerText;
            const productPrice = product.querySelector('.price').innerText;

            alert(`${productName} has been added to the cart.`);

            if (cartItemsQuantities[productName]) {
                // Increment quantity if same is already in the cart
                cartItemsQuantities[productName]++;
                updateCartItemQuantity(productName, cartItemsQuantities[productName]);
            } else {
                // Create new cart item
                const cartItemHTML = `
                    <div class="cart-item" data-product="${productName}">
                        ${productName} - ${productPrice} - <span class="quantity">1</span>
                        <button class="remove-item">Remove</button>
                    </div>`;
                shoppingCart.insertAdjacentHTML('beforeend', cartItemHTML);
                cartItemsQuantities[productName] = 1;
            }
        });
    });

    // Event listener for removing items from the cart
    shoppingCart.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item')) {
            const cartItem = event.target.closest('.cart-item');
            const productName = cartItem.dataset.product;
            if (cartItemsQuantities[productName] > 1) {
                // Decrease quanity
                cartItemsQuantities[productName]--;
                updateCartItemQuantity(productName, cartItemsQuantities[productName]);
            } else {
                // Remove from cart if quantity is 1
                delete cartItemsQuantities[productName];
                cartItem.remove();
            }
        }
    });

    // Update quantity for a existing cart item
    function updateCartItemQuantity(productName, quantity) {
        const cartItem = shoppingCart.querySelector(`[data-product="${productName}"]`);
        const quantityElement = cartItem.querySelector('.quantity');
        quantityElement.textContent = quantity;
    }
});
