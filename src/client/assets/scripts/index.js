var deleteBtn = document.querySelectorAll('a[title="Delete"]')
var indexBlock = document.querySelector(".country-index")
var clickHandler = debounce(function (e) {
    location.href = '/'
})
indexBlock.addEventListener('click', function(e){
    if(e.target.title === "Delete" || e.target.parentNode.title === "Delete" || e.target.parentNode.parentNode.title === "Delete" ){
        clickHandler(e)
    }
})