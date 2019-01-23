var clickHandler = window.debounce(function () {
    location.href = "/";
});
document
    .querySelector(".btn.btn-danger")
    .addEventListener("click", function (e) {
        clickHandler(e);
    })

xtag.create('x-view', class extends XTagElement {
    set 'bookData::attr'(value) {
        const bookData = JSON.parse(value)
        this.bookId = bookData.id
        this.bookName = bookData.name
        this.bookDetails = ''
        Object.keys(bookData).map(key => {
            this.bookDetails += `<tr>
                <th>${key}</th>
                <td>${bookData[key]}</td>
            </tr>`
        })
    }
    '::template(true)'() {
        return `<div class="country-view">
            <h1>${this.bookName}</h1>
            <p>
                <a class="btn btn-primary" href="/update?id=${this.bookId}">Update</a>
                <a class="btn btn-danger" href="/api/delete?id=${this.bookId}" data-confirm="Are you sure you want to delete this item?" data-method="post">Delete</a>
            </p>
            <table id="w0" class="table table-striped table-bordered detail-view">
                <tbody>
                 ${this.bookDetails}
                </tbody>
            </table>
        </div>`
    }
});