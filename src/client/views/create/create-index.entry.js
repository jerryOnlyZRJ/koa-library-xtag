const debounce = require('../../assets/scripts/debounce')

const fields = ["name", "author", "date", "score"];
const inputs = document.querySelectorAll('.form-group input[type="text"]');
const submitBtn = document.querySelector(".btn.btn-success");

const clickHandler = debounce(() => {
    let data = {};
    inputs.forEach(function (item) {
        data[item.name] = item.value;
    });
    fetch("/api/create", {
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

xtag.create('x-create', class extends XTagElement {
    '::template(true)'() {
        let fieldsHtml = ''
        fields.map(item => {
            fieldsHtml += ` <div class="form-group field-country-code required">
            <label class="control-label" for="country-code">${item}</label>
            <input type="text" id="country-code" class="form-control" name="${item}" aria-required="true">
            <div class="help-block"></div>
        </div>`
        })
        return `<div class="country-create">
        <h1>Create Book</h1>
        <div class="country-form">
            ${fieldsHtml}
            <div class="form-group">
                <button type="submit" class="btn btn-success">Save</button> </div>
        </div>
    `
    }
});