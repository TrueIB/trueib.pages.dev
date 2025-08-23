window.addEventListener("message", function (event) {
  if (event.data && event.data.type === "THEME_CHANGE") {
    this.document.documentElement.setAttribute("data-subject", event.data.subject);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const codeContents = document.querySelectorAll("pre");
  let isDragging = false;
  let startX, scrollLeft;
  for (let codeContent of codeContents) {
    codeContent.addEventListener('mousedown', (e) => {
      isDragging = true;
      codeContent.style.cursor = 'grabbing';
      startX = e.pageX - codeContent.offsetLeft;
      scrollLeft = codeContent.scrollLeft;
    });

    codeContent.addEventListener('mouseup', () => {
      isDragging = false;
      codeContent.style.cursor = 'grab';
    });

    codeContent.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - codeContent.offsetLeft;
      const walk = (x - startX) * 2;
      codeContent.scrollLeft = scrollLeft - walk;
    });

    codeContent.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - codeContent.offsetLeft;
      scrollLeft = codeContent.scrollLeft;
    }, { passive: true });

    codeContent.addEventListener('touchend', () => {
      isDragging = false;
    });

    codeContent.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - codeContent.offsetLeft;
      const walk = (x - startX) * 2;
      codeContent.scrollLeft = scrollLeft - walk;
    }, { passive: true });
  }
})
