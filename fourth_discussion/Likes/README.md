# Button Clicker - likes

This is a project to practice structuring layouts with HTML/CSS and managing independent element data using JavaScript event handlers.

## What I Learned and Did:

- I used the `onclick` attribute to pass specific string parameters into a single JavaScript function.
- I isolated numerical values inside HTML tags (`<span>`) so they can be modified without altering the surrounding text wrapper.
- I learned how to extract and mutate string data inside the DOM using `element.innerText` and `parseInt()`.
- I built a structured layout using nested `div` containers and precise pixel (`px`) formatting.
- I implemented a realistic local path connection via `images/avatar.jpg` for custom profile assets.

## How the JavaScript Works:

1. **Like Button Execution** - Clicking any "Like" button calls the `onclicked(id)` function, passing a unique text string directly associated with that specific post card (such as `'like-neil'`, `'like-yazan'`, or `'like-maryan'`).

2. **Target Node Capture** - The function takes that parameter and isolates the matching text node precisely via `document.getElementById(id)`. This keeps clicks from accidentally bleeding over or updating multiple post elements at once.

3. **Data Parsing & Addition** - The script reads the raw string number currently visible inside the isolated node, processes it into a computer-readable math integer via `parseInt()`, adds `1` to that sum, and uses `counterNode.innerText` to write the updated calculation right back to the display.
