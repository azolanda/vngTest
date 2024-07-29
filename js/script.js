'use strict'

const data = [{
        img: './../img/products/product_1.png',
        heading: 'Встраиваемый светильник Markt',
        price: 3490,
        priceOld: 5060,
    },
    {
        img: './../img/products/product_2.png',
        heading: 'Линейный светильник ARG',
        price: 6700,
    },
    {
        img: './../img/products/product_3.png',
        heading: 'Сведодиодный светильник',
        price: 5060,
        priceOld: 6060,
    },
    {
        img: './../img/products/product_1.png',
        heading: 'Встраиваемый светильник Markt',
        price: 3490,
    },
    {
        img: './../img/products/product_2.png',
        heading: 'Линейный светильник ARG',
        price: 6700,
        priceOld: 6060,
    },
    {
        img: './../img/products/product_3.png',
        heading: 'Сведодиодный светильник',
        price: 5060,
    },
    {
        img: './../img/products/product_1.png',
        heading: 'Встраиваемый светильник Markt',
        price: 3490,
        priceOld: 5060,
    },
    {
        img: './../img/products/product_2.png',
        heading: 'Линейный светильник ARG',
        price: 6700,
    }
];

const products = document.querySelector('.products');

let counter = 0;
if (data) {


    for (let i of data) {

        if (counter < 8) {
            products.insertAdjacentHTML('beforeend', `
            <div class = "products-item" >
                <div class = "products__container" >
                    <img src = ${i.img} alt = "product" class = "products__img" >
                    <a href = "#" class = "products__button" >
                        Подробнее 
                    </a> 
                </div> 
                <h2 class = "products__heading" >
                    ${i.heading}
                </h2>
                <div class = "products__price-wrapper" >
                </div>
            </div>
        `);

            const priceWrappers = document.querySelectorAll('.products__price-wrapper');
            const priceWrapper = priceWrappers[priceWrappers.length - 1];

            if (counter % 2 === 0 && i.priceOld !== undefined) {
                const productContainers = document.querySelectorAll('.products__container');
                const productContainer = productContainers[productContainers.length - 1];
                productContainer.classList.add('products__discount');

                priceWrapper.insertAdjacentHTML('beforeend',
                    `<p class = "products__price products__price-best" >
                    ${i.price.toLocaleString('ru')} &#x20bd; 
                </p>  
                <p class = "products__price products__price-old" >
                    <span class = "products__price-through">
                        ${i.priceOld.toLocaleString('ru')}</span> &#x20bd;  
                </p>
            `);
            } else {
                priceWrapper.insertAdjacentHTML('beforeend',
                    `<p class="products__price">
                ${i.price.toLocaleString('ru')} &#x20bd;
            </p>
            `);
            }
        }
        counter++;
    }
}