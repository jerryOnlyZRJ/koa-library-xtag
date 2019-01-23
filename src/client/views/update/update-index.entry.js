var inputs = document.querySelectorAll('.form-group input[type="text"]');
var submitBtn = document.querySelector(".btn.btn-success");
var clickHandler = window.debounce(function () {
    var data = {};
    data.id = document.getElementById("book-id").value;
    inputs.forEach(function (item) {
        data[item.name] = item.value;
    });
    fetch("/api/update", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json" // 指定提交方式为表单提交
            }),
            body: JSON.stringify(data)
        })
        .then(() => {
            location.href = "/";
        })
        .catch(console.log);
});
submitBtn.addEventListener("click", clickHandler);

xtag.create('x-update', class extends XTagElement {
    set 'bookData::attr'(value) {
        // X-Tag automatically maps camel cased getter/setter names to their
        // dashed attribute equivalents. In this example, the `maxVolume` 
        // getter/setter pair maps to the `max-volume` attribute.
        const bookData = JSON.parse(value)
        this.bookName = bookData.name
        this.bookDetails = ''
        Object.keys(bookData).map(key => {
            if (key === "id") {
                this.bookDetails += `<input id="book-id" type="text" hidden value="${bookData[key]}">`
            }
            this.bookDetails += `<div class="form-group field-country-code required">
            <label class="control-label" for="country-code">${key}</label>
            <input type="text" id="country-code" class="form-control" name="${key}" value="${bookData[key]}"
                aria-required="true">
            <div class="help-block"></div>
        </div>`
        })
    }
    '::template(true)'() {
        return `<div class="country-update">
        <h1>Update Book: ${this.bookName}</h1>
        <div class="country-form">
            ${this.bookDetails}
            <div class="form-group">
                <button type="submit" class="btn btn-success">Save</button> </div>
        </div>
`
    }
});