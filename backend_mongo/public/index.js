

async function addToCart(id) {
    await fetch(
        "/api/cart",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({productId:id})
        }
    );
    loadCart();
}