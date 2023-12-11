const today = new Date();
const productId = (today.getFullYear() + today.getMonth() + today.getDate()) % 20 + 1;

fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(json => {
        const imageElement = document.querySelector('#product_image');
       
        imageElement.src = json.image;
        imageElement.alt = json.title;
    })
    .catch(error => console.error('An error occurred:', error));


fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res=>res.json())
    .then(json => {
        const electronics = document.querySelector('#electonics_image');
        electronics.alt = json[5].title;
    })
    .catch(error => console.error('An error occurred:', error));

fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>res.json())
    .then(json => {
        const jewelery = document.querySelector('#jewelry_image');
       
        jewelery.alt = json[2].title;
    })
    .catch(error => console.error('An error occurred:', error));

fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
    .then(res => res.json())
    .then(json => {
        const men = document.querySelector('#men_clothing_image');
       
        men.alt = json[2].title;

        console.log(json);
    })
    .catch(error => console.error('An error occurred:', error));


fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
    .then(res => res.json())
    .then(json => {
        const women = document.querySelector('#women_clothing_image');
       
        women.alt = json[4].title;

        console.log(json);
    })
    .catch(error => console.error('An error occurred:', error));



/*index2 JS*/

fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=> {
            const electronics1 = document.querySelector('#electronics1');
            const electronics2 = document.querySelector('#electronics2');
            const electronics3 = document.querySelector('#electronics3');
            const electronics4 = document.querySelector('#electronics4');
            const electronics5 = document.querySelector('#electronics5');
            const electronics6 = document.querySelector('#electronics6');

            electronics1.src=json[0].image;
            electronics1.alt = json[0].title;

            electronics2.src=json[1].image;
            electronics2.alt = json[1].title;

            electronics3.src=json[2].image;
            electronics3.alt = json[2].title;

            electronics4.src=json[3].image;
            electronics4.alt = json[3].title;

            electronics5.src=json[4].image;
            electronics5.alt = json[4].title;

            electronics6.src=json[5].image;
            electronics6.alt = json[5].title;


            console.log(json);
        })
        .catch(error => console.error('An error occurred:', error));

fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=> {
            const jewelery1 = document.querySelector("#jewelry1");
            const jewelery2 = document.querySelector("#jewelry2");
            const jewelery3 = document.querySelector("#jewelry3");
            const jewelery4 = document.querySelector("#jewelry4");


            jewelery1.src = json[0].image;
            jewelery1.alt = json[0].title;

            jewelery2.src = json[1].image;
            jewelery2.alt = json[1].title;

            jewelery3.src = json[2].image;
            jewelery3.alt = json[2].title;

            jewelery4.src = json[3].image;
            jewelery4.alt = json[3].title;

            console.log(json);
        })
        .catch(error => console.error('An error occurred:', error));

        
fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            
            const men1 = document.querySelector("#men1");
            const men2 = document.querySelector("#men2");
            const men3 = document.querySelector("#men3");
            const men4 = document.querySelector("#men4");
            const men5 = document.querySelector("#men5");



            men1.src = json[0].image;
            men1.alt = json[0].title;

            men2.src = json[1].image;
            men2.alt = json[1].title;

            men3.src = json[2].image;
            men3.alt = json[2].title;

            men4.src = json[3].image;
            men4.alt = json[3].title;


            console.log(json);
        })
        .catch(error => console.error('An error occurred:', error));
    
fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const women1 = document.querySelector("#women1");
            const women2 = document.querySelector("#women2");
            const women3 = document.querySelector("#women3");
            const women4 = document.querySelector("#women4");
            const women5 = document.querySelector("#women5");
            const women6 = document.querySelector("#women6");



            women1.src = json[0].image;
            women1.alt = json[0].title;

            women2.src = json[1].image;
            women2.alt = json[1].title;

            women3.src = json[2].image;
            women3.alt = json[2].title;

            women4.src = json[3].image;
            women4.alt = json[3].title;

            women5.src = json[4].image;
            women5.alt = json[4].title;

            women6.src = json[5].image;
            women6.alt = json[5].title;
    
            console.log(json);
        })
        .catch(error => console.error('An error occurred:', error));



/*Electronic 1*/
const popup1 = document.getElementById("popup_electronic1");
const span1 = document.getElementsByClassName("close")[0];
span1.onclick = function() {
    popup1.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup1) {
        popup1.style.display = "none";
    }
});
const btn1 = document.getElementById("check_product1");

btn1.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(json => {
            const productImageelectronic1 = document.getElementById('productImageelectronic1');
            const product_name_electronic1 = document.getElementById('product_name_electronic1');
            const product_price_electronic1 = document.getElementById('product_price_electronic1');
            const product_description_electronic1 = document.getElementById('product_description_electronic1');
            const product_category_electronic1 = document.getElementById('product_category_electronic1');
       
            productImageelectronic1.src = json[0].image;
            productImageelectronic1.alt = json[0].title;

            product_name_electronic1.innerHTML = json[0].title;
            product_price_electronic1.innerHTML = "PRICE: $" + json[0].price;
            product_description_electronic1.innerHTML = json[0].description;
            product_category_electronic1.innerHTML = "Product Type: " + json[0].category;

            popup1.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*Electronic 2*/
const popup2 = document.getElementById("popup_electronic2");
const span2 = document.getElementsByClassName("close")[1];
span2.onclick = function() {
    popup2.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup2) {
        popup2.style.display = "none";
    }
});
const btn2 = document.getElementById("check_product2");

btn2.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(json => {
            const productImageelectronic2 = document.getElementById('productImageelectronic2');
            const product_name_electronic2 = document.getElementById('product_name_electronic2');
            const product_price_electronic2 = document.getElementById('product_price_electronic2');
            const product_description_electronic2 = document.getElementById('product_description_electronic2');
            const product_category_electronic2 = document.getElementById('product_category_electronic2');
       
            productImageelectronic2.src = json[1].image;
            productImageelectronic2.alt = json[1].title;

            product_name_electronic2.innerHTML = json[1].title;
            product_price_electronic2.innerHTML = "PRICE: $" + json[1].price;
            product_description_electronic2.innerHTML = json[1].description;
            product_category_electronic2.innerHTML = "Product Type: " + json[1].category;

            popup2.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*Electronic 3*/
const popup3 = document.getElementById("popup_electronic3");
const span3 = document.getElementsByClassName("close")[2];
span3.onclick = function() {
    popup3.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup3) {
        popup3.style.display = "none";
    }
});
const btn3 = document.getElementById("check_product3");

btn3.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(json => {
            const productImageelectronic3 = document.getElementById('productImageelectronic3');
            const product_name_electronic3 = document.getElementById('product_name_electronic3');
            const product_price_electronic3 = document.getElementById('product_price_electronic3');
            const product_description_electronic3 = document.getElementById('product_description_electronic3');
            const product_category_electronic3 = document.getElementById('product_category_electronic3');
       
            productImageelectronic3.src = json[2].image;
            productImageelectronic3.alt = json[2].title;

            product_name_electronic3.innerHTML = json[2].title;
            product_price_electronic3.innerHTML = "PRICE: $" +  json[2].price;
            product_description_electronic3.innerHTML = json[2].description;
            product_category_electronic3.innerHTML = "Product Type: " + json[2].category;

            popup3.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*Electronic 4*/
const popup4 = document.getElementById("popup_electronic4");
const span4 = document.getElementsByClassName("close")[3];
span4.onclick = function() {
    popup4.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup4) {
        popup4.style.display = "none";
    }
});
const btn4 = document.getElementById("check_product4");

btn4.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(json => {
            const productImageelectronic4 = document.getElementById('productImageelectronic4');
            const product_name_electronic4 = document.getElementById('product_name_electronic4');
            const product_price_electronic4 = document.getElementById('product_price_electronic4');
            const product_description_electronic4 = document.getElementById('product_description_electronic4');
            const product_category_electronic4 = document.getElementById('product_category_electronic4');
       
            productImageelectronic4.src = json[3].image;
            productImageelectronic4.alt = json[3].title;

            product_name_electronic4.innerHTML = json[3].title;
            product_price_electronic4.innerHTML = "PRICE: $" +  json[3].price;
            product_description_electronic4.innerHTML = json[3].description;
            product_category_electronic4.innerHTML = "Product Type: " + json[3].category;

            popup4.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*Electronic 5*/
const popup5 = document.getElementById("popup_electronic5");
const span5 = document.getElementsByClassName("close")[4];
span5.onclick = function() {
    popup5.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup5) {
        popup5.style.display = "none";
    }
});
const btn5 = document.getElementById("check_product5");

btn5.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(json => {
            const productImageelectronic5 = document.getElementById('productImageelectronic5');
            const product_name_electronic5 = document.getElementById('product_name_electronic5');
            const product_price_electronic5 = document.getElementById('product_price_electronic5');
            const product_description_electronic5 = document.getElementById('product_description_electronic5');
            const product_category_electronic5 = document.getElementById('product_category_electronic5');
       
            productImageelectronic5.src = json[4].image;
            productImageelectronic5.alt = json[4].title;

            product_name_electronic5.innerHTML = json[4].title;
            product_price_electronic5.innerHTML = "PRICE: $" +  json[4].price;
            product_description_electronic5.innerHTML = json[4].description;
            product_category_electronic5.innerHTML = "Product Type: " + json[4].category;

            popup5.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*Electronic 6*/
const popup6 = document.getElementById("popup_electronic6");
const span6 = document.getElementsByClassName("close")[5];
span6.onclick = function() {
    popup6.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup6) {
        popup6.style.display = "none";
    }
});
const btn6 = document.getElementById("check_product6");

btn6.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(json => {
            const productImageelectronic6 = document.getElementById('productImageelectronic6');
            const product_name_electronic6 = document.getElementById('product_name_electronic6');
            const product_price_electronic6 = document.getElementById('product_price_electronic6');
            const product_description_electronic6 = document.getElementById('product_description_electronic6');
            const product_category_electronic6 = document.getElementById('product_category_electronic6');
       
            productImageelectronic6.src = json[5].image;
            productImageelectronic6.alt = json[5].title;

            product_name_electronic6.innerHTML = json[5].title;
            product_price_electronic6.innerHTML = "PRICE: $" +  json[5].price;
            product_description_electronic6.innerHTML = json[5].description;
            product_category_electronic6.innerHTML = "Product Type: " + json[5].category;

            popup6.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*jewelry1*/
const popup7 = document.getElementById("popup_jewelry1");
const span7 = document.getElementsByClassName("close")[6];
span7.onclick = function() {
    popup7.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup7) {
        popup7.style.display = "none";
    }
});
const btn7 = document.getElementById("check_product7");

btn7.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => {
            const productImagejewelry1 = document.getElementById('productImagejewelry1');
            const product_name_jewelry1 = document.getElementById('product_name_jewelry1');
            const product_price_jewelry1 = document.getElementById('product_price_jewelry1');
            const product_description_jewelry1 = document.getElementById('product_description_jewelry1');
            const product_category_jewelry1= document.getElementById('product_category_jewelry1');
       
            productImagejewelry1.src = json[0].image;
            productImagejewelry1.alt = json[0].title;

            product_name_jewelry1.innerHTML = json[0].title;
            product_price_jewelry1.innerHTML = "PRICE: $" +  json[0].price;
            product_description_jewelry1.innerHTML = json[0].description;
            product_category_jewelry1.innerHTML = "Product Type: " + json[0].category;

            popup7.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*jewelry2*/
const popup8 = document.getElementById("popup_jewelry2");
const span8 = document.getElementsByClassName("close")[7];
span8.onclick = function() {
    popup8.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup8) {
        popup8.style.display = "none";
    }
});
const btn8 = document.getElementById("check_product8");

btn8.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => {
            const productImagejewelry2 = document.getElementById('productImagejewelry2');
            const product_name_jewelry2 = document.getElementById('product_name_jewelry2');
            const product_price_jewelry2 = document.getElementById('product_price_jewelry2');
            const product_description_jewelry2 = document.getElementById('product_description_jewelry2');
            const product_category_jewelry2= document.getElementById('product_category_jewelry2');
       
            productImagejewelry2.src = json[1].image;
            productImagejewelry2.alt = json[1].title;

            product_name_jewelry2.innerHTML = json[1].title;
            product_price_jewelry2.innerHTML = "PRICE: $" +  json[1].price;
            product_description_jewelry2.innerHTML = json[1].description;
            product_category_jewelry2.innerHTML = "Product Type: " + json[1].category;

            popup8.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*jewelry3*/
const popup9 = document.getElementById("popup_jewelry3");
const span9 = document.getElementsByClassName("close")[8];
span9.onclick = function() {
    popup9.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup9) {
        popup9.style.display = "none";
    }
});
const btn9 = document.getElementById("check_product9");

btn9.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => {
            const productImagejewelry3 = document.getElementById('productImagejewelry3');
            const product_name_jewelry3 = document.getElementById('product_name_jewelry3');
            const product_price_jewelry3 = document.getElementById('product_price_jewelry3');
            const product_description_jewelry3 = document.getElementById('product_description_jewelry3');
            const product_category_jewelry3= document.getElementById('product_category_jewelry3');
       
            productImagejewelry3.src = json[2].image;
            productImagejewelry3.alt = json[2].title;

            product_name_jewelry3.innerHTML = json[2].title;
            product_price_jewelry3.innerHTML = "PRICE: $" +  json[2].price;
            product_description_jewelry3.innerHTML = json[2].description;
            product_category_jewelry3.innerHTML = "Product Type: " + json[2].category;

            popup9.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*jewelry4*/
const popup10 = document.getElementById("popup_jewelry4");
const span10 = document.getElementsByClassName("close")[9];
span10.onclick = function() {
    popup10.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup10) {
        popup10.style.display = "none";
    }
});
const btn10 = document.getElementById("check_product10");

btn10.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => {
            const productImagejewelry4 = document.getElementById('productImagejewelry4');
            const product_name_jewelry4 = document.getElementById('product_name_jewelry4');
            const product_price_jewelry4 = document.getElementById('product_price_jewelry4');
            const product_description_jewelry4 = document.getElementById('product_description_jewelry4');
            const product_category_jewelry4= document.getElementById('product_category_jewelry4');
       
            productImagejewelry4.src = json[3].image;
            productImagejewelry4.alt = json[3].title;

            product_name_jewelry4.innerHTML = json[3].title;
            product_price_jewelry4.innerHTML = "PRICE: $" +  json[3].price;
            product_description_jewelry4.innerHTML = json[3].description;
            product_category_jewelry4.innerHTML = "Product Type: " + json[3].category;

            popup10.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*men1*/
const popup11 = document.getElementById("popup_men1");
const span11 = document.getElementsByClassName("close")[10];
span11.onclick = function() {
    popup11.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == 11) {
        popup11.style.display = "none";
    }
});
const btn11 = document.getElementById("check_product11");

btn11.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagemen1 = document.getElementById('productImagemen1');
            const product_name_men1 = document.getElementById('product_name_men1');
            const product_price_men1 = document.getElementById('product_price_men1');
            const product_description_men1 = document.getElementById('product_description_men1');
            const product_category_men1 = document.getElementById('product_category_men1');
       
            productImagemen1.src = json[0].image;
            productImagemen1.alt = json[0].title;

            product_name_men1.innerHTML = json[0].title;
            product_price_men1.innerHTML = "PRICE: $" +  json[0].price;
            product_description_men1.innerHTML = json[0].description;
            product_category_men1.innerHTML = "Product Type: " + json[0].category;

            popup11.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*men2*/
const popup12 = document.getElementById("popup_men2");
const span12 = document.getElementsByClassName("close")[11];
span12.onclick = function() {
    popup12.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup12) {
        popup12.style.display = "none";
    }
});
const btn12 = document.getElementById("check_product12");

btn12.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagemen2 = document.getElementById('productImagemen2');
            const product_name_men2 = document.getElementById('product_name_men2');
            const product_price_men2 = document.getElementById('product_price_men2');
            const product_description_men2 = document.getElementById('product_description_men1');
            const product_category_men2 = document.getElementById('product_category_men2');
       
            productImagemen2.src = json[1].image;
            productImagemen2.alt = json[1].title;

            product_name_men2.innerHTML = json[1].title;
            product_price_men2.innerHTML = "PRICE: $" +  json[1].price;
            product_description_men2.innerHTML = json[1].description;
            product_category_men2.innerHTML = "Product Type: " + json[1].category;

            popup12.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*men3*/
const popup13 = document.getElementById("popup_men3");
const span13 = document.getElementsByClassName("close")[12];
span13.onclick = function() {
    popup13.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup13) {
        popup13.style.display = "none";
    }
});
const btn13 = document.getElementById("check_product13");

btn13.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagemen3 = document.getElementById('productImagemen3');
            const product_name_men3 = document.getElementById('product_name_men3');
            const product_price_men3 = document.getElementById('product_price_men3');
            const product_description_men3 = document.getElementById('product_description_men3');
            const product_category_men3 = document.getElementById('product_category_men3');
       
            productImagemen3.src = json[2].image;
            productImagemen3.alt = json[2].title;

            product_name_men3.innerHTML = json[2].title;
            product_price_men3.innerHTML = "PRICE: $" +  json[2].price;
            product_description_men3.innerHTML = json[2].description;
            product_category_men3.innerHTML = "Product Type: " + json[2].category;

            popup13.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*men4*/
const popup14 = document.getElementById("popup_men4");
const span14 = document.getElementsByClassName("close")[14];
span14.onclick = function() {
    popup14.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup14) {
        popup14.style.display = "none";
    }
});
const btn14 = document.getElementById("check_product14");

btn14.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagemen4 = document.getElementById('productImagemen4');
            const product_name_men4 = document.getElementById('product_name_men4');
            const product_price_men4 = document.getElementById('product_price_men4');
            const product_description_men4 = document.getElementById('product_description_men4');
            const product_category_men4 = document.getElementById('product_category_men4');
       
            productImagemen4.src = json[3].image;
            productImagemen4.alt = json[3].title;

            product_name_men4.innerHTML = json[3].title;
            product_price_men4.innerHTML = "PRICE: $" +  json[3].price;
            product_description_men4.innerHTML = json[3].description;
            product_category_men4.innerHTML = "Product Type: " + json[3].category;

            popup14.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*women1*/
const popup15 = document.getElementById("popup_women1");
const span15 = document.getElementsByClassName("close")[15];
span15.onclick = function() {
    popup15.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup15) {
        popup15.style.display = "none";
    }
});
const btn15 = document.getElementById("check_product15");

btn15.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagewomen1 = document.getElementById('productImagewomen1');
            const product_name_women1 = document.getElementById('product_name_women1');
            const product_price_women1 = document.getElementById('product_price_women1');
            const product_description_women1 = document.getElementById('product_description_women1');
            const product_category_women1 = document.getElementById('product_category_women1');
       
            productImagewomen1.src = json[0].image;
            productImagewomen1.alt = json[0].title;

            product_name_women1.innerHTML = json[0].title;
            product_price_women1.innerHTML = "PRICE: $" +  json[0].price;
            product_description_women1.innerHTML = json[0].description;
            product_category_women1.innerHTML = "Product Type: " + json[0].category;

            popup15.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*women2*/
const popup16 = document.getElementById("popup_women2");
const span16 = document.getElementsByClassName("close")[17];
span16.onclick = function() {
    popup16.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup16) {
        popup16.style.display = "none";
    }
});
const btn16 = document.getElementById("check_product16");

btn16.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagewomen2 = document.getElementById('productImagewomen2');
            const product_name_women2 = document.getElementById('product_name_women2');
            const product_price_women2 = document.getElementById('product_price_women2');
            const product_description_women2 = document.getElementById('product_description_women2');
            const product_category_women2 = document.getElementById('product_category_women2');
       
            productImagewomen2.src = json[1].image;
            productImagewomen2.alt = json[1].title;

            product_name_women2.innerHTML = json[1].title;
            product_price_women2.innerHTML = "PRICE: $" +  json[1].price;
            product_description_women2.innerHTML = json[1].description;
            product_category_women2.innerHTML = "Product Type: " + json[1].category;

            popup16.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*women3*/
const popup17 = document.getElementById("popup_women3");
const span17 = document.getElementsByClassName("close")[18];
span17.onclick = function() {
    popup17.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup17) {
        popup17.style.display = "none";
    }
});
const btn17 = document.getElementById("check_product17");

btn17.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagewomen3 = document.getElementById('productImagewomen3');
            const product_name_women3 = document.getElementById('product_name_women3');
            const product_price_women3 = document.getElementById('product_price_women3');
            const product_description_women3 = document.getElementById('product_description_women3');
            const product_category_women3 = document.getElementById('product_category_women3');
       
            productImagewomen3.src = json[2].image;
            productImagewomen3.alt = json[2].title;

            product_name_women3.innerHTML = json[2].title;
            product_price_women3.innerHTML = "PRICE: $" +  json[2].price;
            product_description_women3.innerHTML = json[2].description;
            product_category_women3.innerHTML = "Product Type: " + json[2].category;

            popup17.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*women4*/
const popup18 = document.getElementById("popup_women4");
const span18 = document.getElementsByClassName("close")[19];
span18.onclick = function() {
    popup18.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup18) {
        popup18.style.display = "none";
    }
});
const btn18 = document.getElementById("check_product18");

btn18.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagewomen4 = document.getElementById('productImagewomen4');
            const product_name_women4 = document.getElementById('product_name_women4');
            const product_price_women4 = document.getElementById('product_price_women4');
            const product_description_women4 = document.getElementById('product_description_women4');
            const product_category_women4 = document.getElementById('product_category_women4');
       
            productImagewomen4.src = json[3].image;
            productImagewomen4.alt = json[3].title;

            product_name_women4.innerHTML = json[3].title;
            product_price_women4.innerHTML = "PRICE: $" +  json[3].price;
            product_description_women4.innerHTML = json[3].description;
            product_category_women4.innerHTML = "Product Type: " + json[3].category;

            popup18.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*women5*/
const popup19 = document.getElementById("popup_women5");
const span19 = document.getElementsByClassName("close")[20];
span19.onclick = function() {
    popup19.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup19) {
        popup19.style.display = "none";
    }
});
const btn19 = document.getElementById("check_product19");

btn19.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagewomen5 = document.getElementById('productImagewomen5');
            const product_name_women5 = document.getElementById('product_name_women5');
            const product_price_women5 = document.getElementById('product_price_women5');
            const product_description_women5 = document.getElementById('product_description_women5');
            const product_category_women5 = document.getElementById('product_category_women5');
       
            productImagewomen5.src = json[4].image;
            productImagewomen5.alt = json[4].title;

            product_name_women5.innerHTML = json[4].title;
            product_price_women5.innerHTML = "PRICE: $" +  json[4].price;
            product_description_women5.innerHTML = json[4].description;
            product_category_women5.innerHTML = "Product Type: " + json[4].category;

            popup19.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}

/*women6*/
const popup20 = document.getElementById("popup_women6");
const span20 = document.getElementsByClassName("close")[21];
span20.onclick = function() {
    popup20.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target == popup20) {
        popup20.style.display = "none";
    }
});
const btn20 = document.getElementById("check_product20");

btn20.onclick = function() {
    fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            const productImagewomen6 = document.getElementById('productImagewomen6');
            const product_name_women6 = document.getElementById('product_name_women6');
            const product_price_women6 = document.getElementById('product_price_women6');
            const product_description_women6 = document.getElementById('product_description_women6');
            const product_category_women6 = document.getElementById('product_category_women6');
       
            productImagewomen6.src = json[5].image;
            productImagewomen6.alt = json[5].title;

            product_name_women6.innerHTML = json[5].title;
            product_price_women6.innerHTML = "PRICE: $" +  json[5].price;
            product_description_women6.innerHTML = json[5].description;
            product_category_women6.innerHTML = "Product Type: " + json[5].category;

            popup20.style.display = "block";
        })
        .catch(error => console.error('An error occurred:', error));
}


fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=> {
            const electronics1 = document.getElementById("electronics1_title");
            const electronics2 = document.getElementById("electronics2_title");
            const electronics3 = document.getElementById("electronics3_title");
            const electronics4 = document.getElementById("electronics4_title");
            const electronics5 = document.getElementById("electronics5_title");
            const electronics6 = document.getElementById("electronics6_title");

            electronics1.innerHTML = json[0].title;
            electronics2.innerHTML = json[1].title;

            electronics3.innerHTML = json[2].title;
            electronics4.innerHTML = json[3].title;

            electronics5.innerHTML = json[4].title;
            electronics6.innerHTML = json[5].title;


            console.log(json);
        })
        .catch(error => console.error('An error occurred:', error));

fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=> {
            const jewelery1= document.getElementById("jewelery1_title");
            const jewelery2 = document.getElementById("jewelery2_title");
            const jewelery3 = document.getElementById("jewelery3_title");
            const jewelery4 = document.getElementById("jewelery4_title");


            jewelery1.innerHTML = json[0].title;
            jewelery2.innerHTML = json[1].title;

            jewelery3.innerHTML = json[2].title;
            jewelery4.innerHTML = json[3].title;

            console.log(json);
        })
        .catch(error => console.error('An error occurred:', error));


fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
        .then(res=>res.json())
        .then(json=> {
            const men1= document.getElementById("men1_title");
            const men2 = document.getElementById("men2_title");
            const men3 = document.getElementById("men3_title");
            const men4 = document.getElementById("men4_title");


            men1.innerHTML = json[0].title;
            men2.innerHTML = json[1].title;

            men3.innerHTML = json[2].title;
            men4.innerHTML = json[3].title;

            console.log(json);
        })
        .catch(error => console.error('An error occurred:', error));     
        


fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res=>res.json())
        .then(json=> {
            const women1= document.getElementById("women1_title");
            const women2 = document.getElementById("women2_title");
            const women3 = document.getElementById("women3_title");
            const women4 = document.getElementById("women4_title");
            const women5 = document.getElementById("women5_title");
            const women6 = document.getElementById("women6_title");

            women1.innerHTML = json[0].title;
            women2.innerHTML = json[1].title;

            women3.innerHTML = json[2].title;
            women4.innerHTML = json[3].title;

            women5.innerHTML = json[0].title;
            women6.innerHTML = json[1].title;;

            console.log(json);
        })
        .catch(error => console.error('An error occurred:', error));


/*Add to cart code*/


/*Add to cart 1*/
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

/*Add to cart 13*/
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn_men3');
    addToCartBtn.addEventListener('click', addToCartClicked);
});

function addToCartClicked() {
    const productName = document.getElementById('product_name_men3').innerText;
    const productPrice = document.getElementById('product_price_men3').innerText;
    const productImage = document.getElementById('productImagemen3').src;

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