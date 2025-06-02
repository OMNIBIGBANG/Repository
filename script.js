const videos = [
  {
    title: "Succubus Yondara Gibo ga Kita 1",
    thumbnail: "images/image1.webp",
    videoFile: "videos/video1.mp4"
  },
  {
    title: "Succubus Yondara Gibo ga Kita 2",
    thumbnail: "images/image2.webp",
    videoFile: "videos/video2.mp4"
  }
];

const gallery = document.getElementById("video-gallery");
const modal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");
const closeBtn = document.getElementById("close-btn");

// Render thumbnails
videos.forEach((video, index) => {
  const img = document.createElement("img");
  img.src = video.thumbnail;
  img.alt = video.title;
  img.classList.add("thumbnail");
  img.addEventListener("click", () => {
    playVideo(video);
  });
  gallery.appendChild(img);
});

// Play selected video
function playVideo(video) {
  videoSource.src = video.videoFile;
  videoPlayer.load();
  modal.classList.remove("hidden");
  videoPlayer.play();
}

// Close video modal
closeBtn.addEventListener("click", () => {
  videoPlayer.pause();
  modal.classList.add("hidden");
  videoSource.src = "";
});
