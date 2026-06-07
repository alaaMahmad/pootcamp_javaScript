# Video Preview

This is a project to practice JavaScript event handlers.

## What I Learned and Did:

- I replaced The placeholder image with a `<video>` tag.
- I used `onmouseover` and `onmouseout` events to dynamically control video playback.
- I learned how to manipulate media element behaviors programmatically using `element.play()`, `element.pause()`, and `element.muted`.

## How the JavaScript Works:

1. **Hover to Play Preview** - When the mouse enters the video boundary (`onmouseover`), it triggers the `playVideo(element)` function.
2. **Muted Playback Sequencing** - Inside the hover function, JavaScript executes `element.muted = true` _before_ calling `element.play()`. This tells the browser the video is silent, allowing it to bypass modern autoplay blocks and play immediately.
3. **Pause on Mouse Leave** - When the mouse leaves the video area (`onmouseout`), it triggers the `pauseVideo(element)` function. This calls `element.pause()` to freeze the video playback right where it is.
