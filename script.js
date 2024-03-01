const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Memory Reboot",
    name: "Slowed",
    source:
      "https://github.com/DARKENFaze/darken/raw/main/memory%20reboot.mp3",
  },
  {
    title: "Yeat Music",
    name: "Nud id change",
    source:
      "https://github.com/DARKENFaze/darken/raw/main/yeat%20music.m4a",
  },
  {
    title: "Sleepwalker",
    name: "Slowed",
    source:
      "https://github.com/DARKENFaze/darken/raw/main/Sleepwalker_Ultra_Slowed__Reverb.mp3",
  },
  {
    title: "I'm good",
    name: "Remix speed",
    source:
      "https://github.com/DARKENFaze/darken/raw/main/i_m%20good.mp3",
  },
  {
    title: "Cleared",
    name: "Remix",
    source:
      "https://github.com/DARKENFaze/darken/raw/main/evelyn%20sound.m4a",
  },

  {
    title: "Разные_исполнители",
    name: "DARKEN",
    source:
      "https://github.com/DARKENFaze/darken/raw/main/Разные_исполнители_End_Of_Line_feat_TRS_80.mp3",
  },
  {
    title: "Delicate",
    name: "Taylor Swift",
    source:
      "https://github.com/DARKENFaze/darken/raw/main/[11] OneShot SpedUp.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching