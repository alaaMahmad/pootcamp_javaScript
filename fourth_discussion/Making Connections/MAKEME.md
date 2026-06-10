# Profile Page - Making Connections

This is a project to managing independent element data using JavaScript event handlers.

## What I Learned and Did:

- I used the `onclick` attribute to pass specific string parameters into a single JavaScript function.
- I isolated numerical values inside HTML tags (`<span>`) so they can be modified without altering the surrounding text wrapper.
- I learned how to extract and mutate string data inside the DOM using `element.innerText` and `parseInt()`.
- I built a structured layout using nested `div` containers and precise pixel (`px`) formatting.
- I implemented a realistic local path connection via `images/avatar.jpg` for custom profile assets.
- I used `.querySelector()` to target and swap image sources (`src`) dynamically alongside text elements.
- I applied clean CSS rules like `.actions i { cursor: pointer; }` to maintain user experience hover indicators without cluttering HTML tags.

## How the JavaScript Works:

1. **Profile Editing (`changeNmae`)** - When the edit profile link is clicked, the function captures the current user text. If it reads "Alaa Ahmad", it updates the field to "Bara Salah" and swaps the image source to `./images/another_avatar.jpg`. Otherwise, it toggles both values cleanly back to their initial state.

2. **Remove Connection Request (`removeConnection`)** - When a user declines a request, the script safely removes the entire specific connection card from the document structure using `.remove()`. It then safely targets the `"num_of_requsets"` counter badge and checks if its number is greater than 0 before deducting `1` from the current total.

3. **Accept Connection Request (`addConnection`)** - Accepting a request utilizes code-reuse by calling `removeConnection(id)` first to delete the item from the list and lower the request count. After that, it targets the `"num_of_connection"` badge element, converts its numerical string to an integer with `parseInt()`, increments it by `1`, and updates the user's friend count display instantly.
