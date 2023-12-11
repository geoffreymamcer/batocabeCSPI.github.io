/*Add to cart 2*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_electronic1');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_electronic1').innerText;
    const productPrice = document.getElementById('product_price_electronic1').innerText;
    const productImage = document.getElementById('productImageelectronic1').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}


/*Add to cart 3*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_electronic2');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_electronic2').innerText;
    const productPrice = document.getElementById('product_price_electronic2').innerText;
    const productImage = document.getElementById('productImageelectronic2').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}


/*Add to cart 4*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_electronic3');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_electronic3').innerText;
    const productPrice = document.getElementById('product_price_electronic3').innerText;
    const productImage = document.getElementById('productImageelectronic3').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 5*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_electronic4');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_electronic4').innerText;
    const productPrice = document.getElementById('product_price_electronic4').innerText;
    const productImage = document.getElementById('productImageelectronic4').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 6*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_electronic5');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_electronic5').innerText;
    const productPrice = document.getElementById('product_price_electronic5').innerText;
    const productImage = document.getElementById('productImageelectronic5').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 7*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_electronic6');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_electronic6').innerText;
    const productPrice = document.getElementById('product_price_electronic6').innerText;
    const productImage = document.getElementById('productImageelectronic6').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 8*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_jewelry1');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_jewelry1').innerText;
    const productPrice = document.getElementById('product_price_jewelry1').innerText;
    const productImage = document.getElementById('productImagejewelry1').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 9*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_jewelry2');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_jewelry2').innerText;
    const productPrice = document.getElementById('product_price_jewelry2').innerText;
    const productImage = document.getElementById('productImagejewelry2').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 10*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_jewelry3');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_jewelry3').innerText;
    const productPrice = document.getElementById('product_price_jewelry3').innerText;
    const productImage = document.getElementById('productImagejewelry3').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 11*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_jewelry4');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_jewelry4').innerText;
    const productPrice = document.getElementById('product_price_jewelry4').innerText;
    const productImage = document.getElementById('productImagejewelry4').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 12*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_men1');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_men1').innerText;
    const productPrice = document.getElementById('product_price_men1').innerText;
    const productImage = document.getElementById('productImagemen1').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 13*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_men2');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_men2').innerText;
    const productPrice = document.getElementById('product_price_men2').innerText;
    const productImage = document.getElementById('productImagemen2').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 14*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_men4');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_men4').innerText;
    const productPrice = document.getElementById('product_price_men4').innerText;
    const productImage = document.getElementById('productImagemen4').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 15*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_women1');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_women1').innerText;
    const productPrice = document.getElementById('product_price_women1').innerText;
    const productImage = document.getElementById('productImagewomen1').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 16*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_women2');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_women2').innerText;
    const productPrice = document.getElementById('product_price_women2').innerText;
    const productImage = document.getElementById('productImagewomen2').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 17*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_women3');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_women3').innerText;
    const productPrice = document.getElementById('product_price_women3').innerText;
    const productImage = document.getElementById('productImagewomen3').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 18*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_women4');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_women4').innerText;
    const productPrice = document.getElementById('product_price_women4').innerText;
    const productImage = document.getElementById('productImagewomen4').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 19*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_women5');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_women5').innerText;
    const productPrice = document.getElementById('product_price_women5').innerText;
    const productImage = document.getElementById('productImagewomen5').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}

/*Add to cart 20*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_women6');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_women6').innerText;
    const productPrice = document.getElementById('product_price_women6').innerText;
    const productImage = document.getElementById('productImagewomen6').src;

    const newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    if (typeof(Storage) !== "undefined") {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(newItem);

        localStorage.setItem('cart', JSON.stringify(cartItems));

    } else {
        alert("Sorry, your browser does not support web storage. Please use a different browser.");
    }
}