const targetElement = document.querySelector(".name h1");

if (!targetElement.classList.contains("text-effect-applied")) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const targetValue = targetElement.dataset.value;
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    targetElement.innerText = targetElement.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return targetValue[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= targetValue.length) {
      clearInterval(interval);
      targetElement.classList.add("text-effect-applied");
    }

    iteration += 1 / 3;
  }, 40);
}



const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  var url = "http://syedahsonhaider.github.io/test.html";
  $(location).attr('href',url);
}
