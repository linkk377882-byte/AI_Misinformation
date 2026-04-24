(function () {
  var btn = document.querySelector(".tl-nav-toggle");
  if (!btn) return;
  btn.addEventListener("click", function () {
    document.body.classList.toggle("tl-nav-open");
    btn.setAttribute("aria-expanded", document.body.classList.contains("tl-nav-open"));
  });
})();
