# dojo pizzeriz

This is a project to practice JavaScript objects and random data generation techniques.

## What I Learned and Did:

- I built a structured `pizzaFactory` function to programmatically generate custom pizza objects with specific crusts, sauces, cheeses, and toppings.
- I consolidated repetitive logic into a single, reusable `randomItems` utility function to handle multi-item randomization dynamically.
- I mastered mathematical utilities like `Math.random()` and `Math.floor()` to pick elements out of array sequences based on temporary length indexing.

## How the JavaScript Works:

1. **Object Assembly Pipeline** - The `pizzaFactory` serves as a blueprint. It instantiates a baseline object schema and dynamically injects the arguments (`crust`, `sauce`, `cheese`, `toppings`) into its properties before returning the final object.
2. **Dynamic Range Scaling** - Within the randomizer, `Math.floor(Math.random() * maxCount) + 1` dynamically determines how many ingredients to select on each execution (ranging from 1 up to the specified `maxCount`).
3. **Loop-Driven Selection** - The `randomItems` function uses a `while` loop that continuously pulls items from the ingredient pool using random indices until the target ingredient count is satisfied.
4. **Stacked Execution Pipeline** - When `randomPizza()` runs, it evaluates four separate inline function calls seamlessly as arguments, instantly piping their randomized outputs directly into the main factory function.
