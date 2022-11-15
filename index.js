const box = document.createElement("div");

box.id = "box";

document.body.appendChild(box);

const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    box.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;

    while (box.firstChild) {
      box.removeChild(box.firstChild);
    }

    box.appendChild(img);
  });
});

box.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  box.classList.remove("active");
});
