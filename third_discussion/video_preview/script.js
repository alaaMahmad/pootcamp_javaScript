function playVideo(element) {
    element.muted = true;
    element.play();
    element.loop = true;
    element.controls = true;
}

function pauseVideo(element) {
    element.pause();
}
