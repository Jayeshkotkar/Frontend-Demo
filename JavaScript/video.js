document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const playIcon = document.getElementById("playIcon");

  playIcon.style.display = video.paused ? "flex" : "none";

  playIcon.addEventListener("click", function () {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  });

  video.addEventListener("play", function () {
      playIcon.style.display = "none";
  });

  video.addEventListener("pause", function () {
      playIcon.style.display = "flex";
  });

  video.addEventListener("ended", function () {
      playIcon.style.display = "flex";
  });
});
