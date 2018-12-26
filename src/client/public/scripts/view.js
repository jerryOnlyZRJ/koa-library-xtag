var clickHandler = debounce(function(e) {
  location.href = "/";
});
document
  .querySelector(".btn.btn-danger")
  .addEventListener("click", function(e) {
    clickHandler(e);
  });
