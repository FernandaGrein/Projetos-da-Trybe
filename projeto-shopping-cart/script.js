const priceContainer = document.querySelector('.total-price');
const cartContainer = document.querySelector('.cart__items');

const fetchProducts = async (produto) => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;

    return fetch(url).then((response) => response.json()).catch(() => 'You must provide an url');

    // if (produto === undefined || produto.length === 0) {
    //     throw new Error('You must provide an url');
    // }
    // const response = await getfetch.json();
    // return response;
};

const fetchItem = async (id) => {
    // const items = `https://api.mercadolibre.com/items/${id}`;
    // return fetch(items).then((response) => response.json()).catch(() => 'You must provide an url');

    const url = `https://api.mercadolibre.com/items/${id}`
    if (id === undefined || id.length === 0) {
        throw new Error('You must provide an url')
    }
    const items = await fetch(url);
    const response = await items.json();
    return response;
};

const saveCartItems = (value) => {
    localStorage.setItem('cartItems', value);
};

const getSavedCartItems = () => {
    const getItems = localStorage.getItem('cartItems');
    return getItems;
};

function createProductImageElement(imageSource) {
    const img = document.createElement('img');
    img.className = 'item__image';
    img.src = imageSource;
    return img;
}

function createCustomElement(element, className, innerText) {
    const e = document.createElement(element);
    e.className = className;
    e.innerText = innerText;
    return e;
}

function savePrice(num) {
    localStorage.setItem('totalPrice', num);
}

function sumElementValue(value) {
    let sum = 0;
    if (priceContainer.innerHTML === '') {
        sum = value;
        priceContainer.innerHTML = sum;
    } else {
        sum = value + parseFloat(priceContainer.innerHTML);
        priceContainer.innerHTML = sum.toFixed(2);
    }
    if (Number.isInteger(sum)) {
        priceContainer.innerHTML = sum.toFixed(0);
    } else {
        priceContainer.innerHTML = sum.toFixed(2);
    }
    savePrice(sum);
    return sum;
}

function getSum() {
    const getValue = localStorage.getItem('totalPrice');
    priceContainer.innerHTML = (Math.round(getValue * 100) / 100);
}

function subtractValue(element) {
    const text = (element.innerHTML).split('$');
    const number = parseFloat(text[1]);
    // console.log(number);
    const subtract = parseFloat(priceContainer.innerHTML) - number;
    priceContainer.innerHTML = subtract.toFixed(2);
    if (Number.isInteger(subtract)) {
        priceContainer.innerHTML = subtract.toFixed(0);
    } else {
        priceContainer.innerHTML = subtract.toFixed(2);
    }
    savePrice(subtract);
}

function cartItemClickListener(event) {
    (event.target).remove();
    saveCartItems(document.querySelector('ol').innerHTML);
    subtractValue(event.target);
}

function createCartItemElement({
    sku,
    name,
    salePrice
}) {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    li.addEventListener('click', cartItemClickListener);

    // https://www.w3schools.com/jsref/prop_html_outerhtml.asp
    const saveValue = document.querySelector('ol').innerHTML + li.outerHTML;

    saveCartItems(saveValue);

    return li;
}

const getfetchItem = async (param) => {
    const getItem = await fetchItem(param);
    const {
        id: sku,
        title: name,
        price: salePrice
    } = getItem;
    const newItem = {
        sku,
        name,
        salePrice
    };

    cartContainer.appendChild(createCartItemElement(newItem));
    sumElementValue(salePrice);
};

function createProductItemElement({
    sku,
    name,
    image
}) {
    const section = document.createElement('section');
    section.className = 'item';

    section.appendChild(createCustomElement('span', 'item__sku', sku));
    section.appendChild(createCustomElement('span', 'item__title', name));
    section.appendChild(createProductImageElement(image));

    const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
    button.addEventListener('click', () => {
        getfetchItem(sku);
    });
    section.appendChild(button);

    return section;
}

const createElement = async () => {
    const getproducts = await fetchProducts('computador');
    const itemContainer = document.getElementsByClassName('items')[0];
    const newProducts = [];
    getproducts.results.forEach((element) => {
        object = {
            sku: element.id,
            name: element.title,
            image: element.thumbnail,
        };
        newProducts.push(object);
    });

    newProducts.forEach((element) => {
        itemContainer.appendChild(createProductItemElement(element));
    });
};
createElement();

function addcartItem() {
    cartContainer.innerHTML = getSavedCartItems();

    const li = document.querySelectorAll('.cart__item');
    li.forEach((index) => {
        index.addEventListener('click', cartItemClickListener);
    });
}

function clearAll() {
    priceContainer.innerHTML = '';
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.lastChild);
    }
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('cartItems');
}

function clearShopCart() {
    const clearButton = document.querySelector('.empty-cart');
    clearButton.addEventListener('click', clearAll);
}
clearShopCart();

window.onload = () => {
    addcartItem();
    getSum();
};