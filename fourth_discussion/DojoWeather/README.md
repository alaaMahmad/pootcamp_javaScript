# Palestine Weather (DojoWeather)

This is a project to display a 4-day weather forecast with interactive temperature conversion and cookie consent using JavaScript event handlers.

## What I Learned and Did:

- I used the `onclick` attribute to pass the clicked element into a JavaScript function for city navigation.
- I isolated numerical temperature values inside HTML `<span class="temp">` tags so they can be modified without affecting the surrounding text.
- I learned how to extract and mutate string data inside the DOM using `element.innerText`, `parseInt()`, and `querySelectorAll()`.
- I built a structured layout using nested `div` containers and precise pixel (`px`) formatting with Flexbox.
- I implemented realistic local image paths via the `images/` folder for weather icons and the cookie image.
- I used `.querySelectorAll()` to target and update multiple temperature elements dynamically.
- I applied clean CSS rules for card design, color-coded temperatures, and a realistic cookie consent box with box-shadow.

## HTML Structure

The HTML provides the main skeleton of the website. It uses a navbar with navigation links, a header for the city name and temperature unit selector, four weather cards arranged in a row, and a cookie consent banner at the bottom. All elements are organized inside container divs for better styling control, and key elements have IDs and classes so JavaScript can easily interact with them.

## CSS Styling

CSS is used to create a clean and modern weather dashboard look. Flexbox is heavily used for layout (navbar, weather cards, and cookie box). The design includes a light blue navbar, rounded weather icons, color-coded high/low temperatures (red and blue), consistent card styling, and a boxed cookie banner with shadow effect for realism.

## How it all Works:

1. **City Navigation (`cityAlert`)** - When any city link (Jerusalem, Ramallah, or Gaza) is clicked, the function receives the element and shows an alert message "Loading weather for [City Name]". This serves as a placeholder for future city switching functionality.

2. **Temperature Conversion (`convertTemp`)** - Triggered when the user changes the °C/°F dropdown. It selects all elements with the `.temp` class, parses their values with `parseInt()`, then uses helper functions `cToF()` and `fToC()` with `Math.round()` to convert between Celsius and Fahrenheit, and updates the displayed temperatures.

3. **Cookie Consent (`acceptCookies`)** - When the user clicks the "I Accept" button, the function targets the cookie box by its ID and removes it completely from the page using `.remove()`.
