document.addEventListener("DOMContentLoaded", function() {
  let apContainer = document.createElement("div");
  apContainer.id = "aplayer";
  document.body.append(apContainer);
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    audio: [
      {
        name: "You're My Star",
        artist: "秀智",
        url: "music/You're My Star.mp3",
        cover: "img/00.png",
      },
    ],
  });
});