var clickHandler = window.debounce(function () {
    location.href = "/";
});
document
    .querySelector(".btn.btn-danger")
    .addEventListener("click", function (e) {
        clickHandler(e);
    })