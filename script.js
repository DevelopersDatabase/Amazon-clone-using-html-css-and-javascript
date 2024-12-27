
// fetch the products //

function fetchProducts(){
    fetch('https://fakestoreapi.com/products').then(response => response.json())   //parse json data
    .then(data => displayProducts(data))
    .then(error => console.error('Error fetching the products', error)); 
    
    }
    //display the products in the dom//
    function displayProducts(products) {
        const productList = document.getElementById('productList');
    
        //clear any existing products//
    
        productList.innerHTML = '' ;
    
        // loop thorugh the products //
    
        products.forEach(product=> {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
    
            productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}} </h3>
            <p> $ ${product.price}</p>
            <button>Add to cart </button>
            
            ` ;
            productList.appendChild(productDiv)
        })
    }
    
    ///call the api // 
    window.onload = fetchProducts; 
