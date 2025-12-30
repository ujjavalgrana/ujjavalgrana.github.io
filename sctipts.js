document.addEventListener("DOMContentLoaded", () => {

  /* Typing effect */
  const typing = document.querySelector(".typing");
  const text = "Hi, I'm Ujjaval Rana";
  let i = 0;

  function type() {
    if (i < text.length) {
      typing.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  if (typing) {
    typing.textContent = "";
    type();
  }

  /* Dashboard Tabs */
  const buttons = document.querySelectorAll(".dashboard-nav button");
  const pages = document.querySelectorAll(".dashboard-page");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const pageId = btn.dataset.page;

      buttons.forEach(b => b.classList.remove("active"));
      pages.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(pageId).classList.add("active");
    });
  });

});
