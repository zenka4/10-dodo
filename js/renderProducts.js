function renderProducts(data) {
    //Piza list render****************************************************************
    let HTMLpizza = '';
    const pizza = data.pizza;
    for (let i = 0; i < pizza.length; i++) {
        let onePizza = pizza[i];
        HTMLpizza += `  <div class="pizza">
                        <img src="${onePizza.photo}" alt="">
                        <h3>${onePizza.name}</h3>
                        <p>${onePizza.ingredients}</p>
                        <div>
                            <p>${onePizza.price}</p>
                            <a href="">#</a>
                        </div>
                    </div>`
    }
    document.querySelector('.pizzaList').innerHTML += HTMLpizza;
    //snacks list render****************************************************
    let HTMLsnacks = '';
    const snacks = data.snacks;
    for (let i = 0; i < snacks.length; i++) {
        let oneSnack = snacks[i];
        HTMLsnacks += `  <div class="snack">
                            <img src="${oneSnack.photo}" alt="">
                            <h3>${oneSnack.name}</h3>
                            <p>${oneSnack.ingredients}</p>
                            <div>
                                <p>${oneSnack.price}</p>
                                <a href="">#</a>
                            </div>
                        </div>`
    }
    document.querySelector('.snacksList').innerHTML += HTMLsnacks;
    //*******************************  desserts **********************************************
    let HTMLdesserts = '';
    const desserts = data.desserts;
    for (let i = 0; i < desserts.length; i++) {
        let oneDessert = desserts[i];
        HTMLdesserts += `  <div class="snack">
                            <img src="${oneDessert.photo}" alt="">
                            <h3>${oneDessert.name}</h3>
                            <p>${oneDessert.ingredients}</p>
                            <div>
                                <p>${oneDessert.price}</p>
                                <a href="">#</a>
                            </div>
                        </div>`
        document.querySelector('.dessertsList').innerHTML += HTMLdesserts;
    }
    //************************************ Drinks *********************************************
    let HTMLdrinks = '';
    const drinks = data.drinks;
    for (let i = 0; i < drinks.length; i++) {
        let oneDrink = drinks[i];
        HTMLdrinks += `  <div class="snack">
                            <img src="${oneDrink.photo}" alt="">
                            <h3>${oneDrink.name}</h3>
                            <p>${oneDrink.size}</p>
                            <div>
                                <p>${oneDrink.price}</p>
                                <a href="">#</a>
                            </div>
                        </div>`
    }
    document.querySelector('.drinksList').innerHTML += HTMLdrinks;
}
export { renderProducts };