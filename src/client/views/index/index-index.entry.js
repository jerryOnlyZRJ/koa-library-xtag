var indexBlock = document.querySelector(".country-index");
var clickHandler = window.debounce(function () {
    location.href = "/";
});
indexBlock.addEventListener("click", function (e) {
    if (
        e.target.title === "Delete" ||
        e.target.parentNode.title === "Delete" ||
        e.target.parentNode.parentNode.title === "Delete"
    ) {
        clickHandler(e);
    }
})