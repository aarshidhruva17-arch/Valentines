const envelope = document.getElementById("envelope");
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  music.play();
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="margin-top:40vh;text-align:center;color:#ff4d6d;">
      YAYYY 💕🐱🐶💑  
      <br>Happy Valentine’s 💖
    </h1>`;
});
