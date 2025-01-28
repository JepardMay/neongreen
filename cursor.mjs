document.addEventListener('DOMContentLoaded', () => {
  let mouseMoved = false;
  const buttons = document.querySelectorAll(".btn");
  const hoverElements = document.querySelectorAll("a:not(.btn), button:not(.btn), input, label");
  const cursor = document.querySelector(".cursor");

  if (buttons.length > 0) {
    buttons.forEach((button) => {
      button.addEventListener("mousemove", (evt) => {
        const rect = button.getBoundingClientRect();
        const x = Math.round(evt.clientX - rect.left);
        const y = Math.round(evt.clientY - rect.top);

        button.style.cssText = `--position-top: ${y}px; --position-left: ${x}px;`;
        if (!cursor.classList.contains("transparent")) cursor.classList.add("transparent");
      });

      button.addEventListener("mouseleave", () => {
        cursor.classList.remove("transparent");
      });
    });
  }

  if (hoverElements.length > 0) {
    hoverElements.forEach((hoverElement) => {
      hoverElement.addEventListener("mousemove", () => {
        if (!cursor.classList.contains("transparent")) cursor.classList.add("transparent");
      });

      hoverElement.addEventListener("mouseleave", () => {
        cursor.classList.remove("transparent");
      });
    });
  }

  if (cursor) {
    window.addEventListener("mousemove", (evt) => {
      if (!mouseMoved) {
        cursor.classList.remove("transparent");
        mouseMoved = true;
      }
      cursor.style.cssText = `--position-top: ${evt.clientY}px; --position-left: ${evt.clientX}px;`;
    });
  }
});
