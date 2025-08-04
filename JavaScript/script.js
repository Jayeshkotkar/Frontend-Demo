const video = document.getElementById("myVideo");
    const playIcon = document.getElementById("playIcon");

    // Show play icon initially
    playIcon.style.display = "block";

    // Toggle play/pause on video click
    video.addEventListener("click", togglePlayPause);
    playIcon.addEventListener("click", togglePlayPause);

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playIcon.style.display = "none";
        } else {
            video.pause();
            playIcon.style.display = "block";
        }
    }

    // Show play icon when video ends
    video.addEventListener("ended", () => {
        playIcon.style.display = "block";
    });