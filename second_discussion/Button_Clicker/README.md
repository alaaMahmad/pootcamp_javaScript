# Button Clicker - Dojonary

This is a project to practice JavaScript event handlers.

## What I Learned and Did:

- I used `onclick`, `onmouseover`, and `onmouseout` events to trigger JavaScript functions
- I learned to change element properties using `element.style.backgroundColor`, `element.innerText`, and `element.remove()`
- I practiced the difference between `==` (comparison) and `=` (assignment)
- I used `console.log()` for debugging

## How the JavaScript Works:

1. **Login Button** - When clicked, it toggles between "Login" and "Logout" text using `element.innerText`

2. **Like Button** - When clicked, it shows an alert popup with the message "ninja was clicked" using `alert()`

3. **Hover Effects (.extra div)** - When you hover over the red box:
   - `onmouseover` calls `over()` which changes the background color to blue using `element.style.backgroundColor = "blue"`
   - `onmouseout` calls `out()` which changes it back to red using `element.style.backgroundColor = "red"`

4. **Add Definition Button** - When clicked, it removes itself from the page using `element.remove()`
