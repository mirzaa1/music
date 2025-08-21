const playBtn = document.getElementById("play-btn");
const audio = document.getElementById("audio");
const time = document.getElementById("time");
const duration = document.getElementById("duration");
let isPlaying = false;

// Format waktu mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

// Update durasi saat audio siap
audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});

// Update waktu berjalan
audio.addEventListener("timeupdate", () => {
  time.textContent = formatTime(audio.currentTime);
});

// Klik tombol play
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.innerHTML = `<i class="fa fa-play"></i>`;
  } else {
    audio.play();
    playBtn.innerHTML = `<i class="fa fa-pause"></i>`;
  }
  isPlaying = !isPlaying;
});