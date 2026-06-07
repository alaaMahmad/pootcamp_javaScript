function pizzaFactory(crust, sauce, cheese, toppings) {
    var pizza = {
        crust: "",
        sauce: "",
        cheese: [],
        toppings: []
    };
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaFactory("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1:",p1);

var p2 = pizzaFactory("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2:", p2);

var p3 = pizzaFactory("thin crust", "bbq", ["cheddar"], ["chicken", "onions", "cilantro"]);
console.log("Pizza 3:", p3);

var p4 = pizzaFactory("gluten free", "white garlic", ["mozzarella", "parmesan"], ["spinach", "artichokes"]);
console.log("Pizza 4:", p4);



function randomPizza() {
    var crusts = ["deep dish", "hand tossed", "thin crust", "gluten free", "stuffed"];
    var sauces = ["traditional", "marinara", "bbq", "white garlic", "pesto"];
    var cheeses = ["mozzarella", "feta", "cheddar", "parmesan", "provolone"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "spinach"];

    function randomItem(list) {
        return list[Math.floor(Math.random() * list.length)];
    }


    function randomItems(list, maxCount) {
       
        var count = Math.floor(Math.random() * maxCount) + 1;
        var picked = [];
        
        while (picked.length < count) {
            var item = randomItem(list); 
                picked.push(item);
        }
        return picked;
    }

    return pizzaFactory(
        randomItem(crusts),
        randomItem(sauces),
        randomItems(cheeses, 2),  
        randomItems(toppings, 4) 
    );
}

console.log("Random Pizza:", randomPizza());