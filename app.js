document.getElementById('apply').addEventListener('click', function() {
    const price = document.getElementById('price');
    const priceString = price.innerText;
    const regularPrice = parseFloat(priceString);
    const pay = document.getElementById('pay');

    const newPrice = regularPrice * (30 / 100);
    const afterDiscount = regularPrice - newPrice;
    pay.innerText = afterDiscount;

})