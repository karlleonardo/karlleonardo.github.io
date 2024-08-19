const items = [
    { name: 'Pain au Cranberry', height: 322, width: 352,  imageUrl: 'assets/images/pastry-1.png', description: "A delightful spiral filled with light French vanilla cream and studded with seasonal berries." },
    { name: 'Pain au Cranberry', height: 322, width: 352,  imageUrl: 'assets/images/pastry-1.png', description: "A delightful spiral filled with light French vanilla cream and studded with seasonal berries." },
    { name: 'Roasted Pear Danish', height: 322, width: 352,  imageUrl: 'assets/images/pastry-2.png', description: "A Danish pastry featuring a roasted pear center, complemented by light French vanilla cream and seasonal berries." },
    { name: 'Onion Anchovy', height: 232, width: 352,  imageUrl: 'assets/images/pastry-3.png', description: "A savory pastry combining the rich flavors of onion and anchovy, enhanced with light French vanilla cream." },
    { name: 'Pain au Cranberry', height: 322, width: 352,  imageUrl: 'assets/images/pastry-1.png', description: "A delightful spiral filled with light French vanilla cream and studded with seasonal berries." },
    { name: 'Pain au Cranberry', height: 322, width: 352,  imageUrl: 'assets/images/pastry-1.png', description: "A delightful spiral filled with light French vanilla cream and studded with seasonal berries." },
    { name: 'Roasted Pear Danish', height: 322, width: 352,  imageUrl: 'assets/images/pastry-2.png', description: "A Danish pastry featuring a roasted pear center, complemented by light French vanilla cream and seasonal berries." },
    { name: 'Onion Anchovy', height: 232, width: 352,  imageUrl: 'assets/images/pastry-3.png', description: "A savory pastry combining the rich flavors of onion and anchovy, enhanced with light French vanilla cream." }
];

const container = document.getElementById('pastries');

items.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.name;
    img.height = item.height;
    img.width = item.width
    imageContainer.appendChild(img);

    itemDiv.appendChild(imageContainer);

    const name = document.createElement('h3');
    name.textContent = item.name;
    itemDiv.appendChild(name);

    const desc = document.createElement('p');
    desc.textContent = item.description;
    itemDiv.appendChild(desc);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');

    const selectContainer = document.createElement('div');
    selectContainer.classList.add('select-container');

    const select = document.createElement('select');
    const option1 = document.createElement('option');
    option1.value = 1;
    option1.textContent = 'Pack of 6';
    const option2 = document.createElement('option');
    option2.value = 2;
    option2.textContent = 'Pack of 12';

    select.appendChild(option1);
    select.appendChild(option2);

    select.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        let totalCost = 25.6 * counter.textContent * selectedValue;
        total.textContent = `$${totalCost.toFixed(2)}`
    });

    selectContainer.appendChild(select);
    optionsContainer.appendChild(selectContainer);

    const counterContainer = document.createElement('div');
    counterContainer.classList.add('counter-container');

    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.classList.add('decrement-btn');
    decrementButton.addEventListener('click', () => {
        let currentCount = counter.textContent;
        if (currentCount > 1) {
            counter.textContent = --currentCount;
            let totalCost = 25.6 * counter.textContent * select.value;
            total.textContent = `$${totalCost.toFixed(2)}`
        }
    });
    counterContainer.appendChild(decrementButton);

    const counter = document.createElement('p');
    counter.textContent = 5;
    counter.classList.add('counter');
    counterContainer.appendChild(counter);

    const incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.addEventListener('click', () => {
        let currentCount = counter.textContent;
        counter.textContent = ++currentCount;

        let totalCost = 25.6 * counter.textContent * select.value;
        total.textContent = `$${totalCost.toFixed(2)}`
    });
    counterContainer.appendChild(incrementButton);

    const total = document.createElement('p');
    total.textContent = '$128';
    total.classList.add('total');
    optionsContainer.appendChild(total);

    optionsContainer.appendChild(counterContainer);
    itemDiv.appendChild(optionsContainer);

    const addToCart = document.createElement('div');
    addToCart.classList.add('add-to-cart');

    const addIcon = document.createElement('img');
    addIcon.src = 'assets/images/plus-icon.png';
    addIcon.alt = 'add-icon';
    addToCart.appendChild(addIcon);

    const addToCartText = document.createElement('p');
    addToCartText.textContent = 'Add To Cart';
    addToCart.appendChild(addToCartText);

    itemDiv.appendChild(addToCart);

    container.appendChild(itemDiv);
});

document.getElementById('mainSection').addEventListener('click', function() {
    const mainSection = document.getElementById('main-content');
    mainSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('aboutSection').addEventListener('click', function() {
    const aboutSection = document.getElementById('about-content');
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('storeSection').addEventListener('click', function() {
    const shopSection = document.getElementById('pastries');
    shopSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('shopNow').addEventListener('click', function() {
    const shopNow = document.getElementById('pastries');
    shopNow.scrollIntoView({
        behavior: 'smooth'
    });
});