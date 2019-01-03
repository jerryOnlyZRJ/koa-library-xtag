/* eslint-disable */
const fields = ["name", "author", "date", "score"];

xtag.create('x-header', class extends XTagElement {
    '::template(true)'() {
        return `<nav id="w1" class="navbar-inverse navbar-fixed-top navbar">
        <div class="container">
            <div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#w1-collapse"><span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span></button><a class="navbar-brand" href="#">My
                    Application</a>
            </div>
            <div id="w1-collapse" class="collapse navbar-collapse">
                <ul id="w2" class="navbar-nav navbar-right nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>`
    }
});
xtag.create('x-footer', class extends XTagElement {
    '::template(true)'() {
        return `<footer class="footer">
        <div class="container">
            <p class="pull-left">© My Company 2018</p>
            <p class="pull-right">Powered by <a href="http://www.yiiframework.com/" rel="external">Yii Framework</a></p>
        </div>
    </footer>`
    }
});
xtag.create('x-index', class extends XTagElement {
    set 'booksData::attr'(value) {
        // X-Tag automatically maps camel cased getter/setter names to their
        // dashed attribute equivalents. In this example, the `maxVolume` 
        // getter/setter pair maps to the `max-volume` attribute.
        const booksData = JSON.parse(value)
        this.books = ''
        booksData.map((item, index) => {
            this.books += ` <tr data-key="${item.id}">
            <td>${index}</td>
            ${Object.values(item).map(bookAttr => `<td>${bookAttr}</td>`).join('')}
            <td><a href="/view?id=${item.id}" title="View" aria-label="View" data-pjax="0"><span class="glyphicon glyphicon-eye-open"></span></a>
                <a href="/update?id=${item.id}" title="Update" aria-label="Update" data-pjax="0"><span class="glyphicon glyphicon-pencil"></span></a>
                <a href="/api/delete?id=${item.id}" title="Delete" aria-label="Delete"
                    data-pjax="0" data-confirm="Are you sure you want to delete this item?" data-method="post"><span
                        class="glyphicon glyphicon-trash"></span></a></td>
        </tr>`
        })
    }
    '::template(true)'() {
        return `<div class="country-index">
        <h1>Books</h1>
        <p>
            <a class="btn btn-success" href="/create">Create Book</a>
        </p>
        <div id="w0" class="grid-view">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th><a href="#" data-sort="id">id</a></th>
                        <th><a href="#" data-sort="name">name</a></th>
                        <th><a href="#" data-sort="author">author</a></th>
                        <th><a href="#" data-sort="date">date</a></th>
                        <th><a href="#" data-sort="score">score</a></th>
                        <th class="action-column">&nbsp;</th>
                    </tr>
                    <tr id="w0-filters" class="filters">
                        <td>&nbsp;</td>
                        <td><input type="text" class="form-control" name="BookSearch[id]"></td>
                        <td><input type="text" class="form-control" name="BookSearch[name]"></td>
                        <td><input type="text" class="form-control" name="BookSearch[author]"></td>
                        <td><input type="text" class="form-control" name="BookSearch[date]"></td>
                        <td><input type="text" class="form-control" name="BookSearch[score]"></td>
                        <td>&nbsp;</td>
                    </tr>
                </thead>
                <tbody>
                   ${this.books}
                </tbody>
            </table>
        </div>
    </div>
    `
    }
});
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
        <script async src="/scripts/yii.validation.js"></script>
<script async src="/scripts/yii.activeForm.js"></script>
<script>
    jQuery(function ($) {
        jQuery('#w0').yiiActiveForm([{
            "id": "book-name",
            "name": "name",
            "container": ".field-book-name",
            "input": "#book-name",
            "validate": function (attribute, value, messages, deferred, $form) {
                yii.validation.required(value, messages, {
                    "message": "书名 cannot be blank."
                });
                yii.validation.string(value, messages, {
                    "message": "书名 must be a string.",
                    "max": 50,
                    "tooLong": "书名 should contain at most 50 characters.",
                    "skipOnEmpty": 1
                });
            }
        }, {
            "id": "book-author",
            "name": "author",
            "container": ".field-book-author",
            "input": "#book-author",
            "validate": function (attribute, value, messages, deferred, $form) {
                yii.validation.required(value, messages, {
                    "message": "作者 cannot be blank."
                });
                yii.validation.string(value, messages, {
                    "message": "作者 must be a string.",
                    "max": 50,
                    "tooLong": "作者 should contain at most 50 characters.",
                    "skipOnEmpty": 1
                });
            }
        }, {
            "id": "book-date",
            "name": "date",
            "container": ".field-book-date",
            "input": "#book-date",
            "validate": function (attribute, value, messages, deferred, $form) {
                yii.validation.required(value, messages, {
                    "message": "出版日期 cannot be blank."
                });
                yii.validation.string(value, messages, {
                    "message": "出版日期 must be a string.",
                    "max": 50,
                    "tooLong": "出版日期 should contain at most 50 characters.",
                    "skipOnEmpty": 1
                });
            }
        }, {
            "id": "book-score",
            "name": "score",
            "container": ".field-book-score",
            "input": "#book-score",
            "validate": function (attribute, value, messages, deferred, $form) {
                yii.validation.number(value, messages, {
                    "pattern": /^\s*[+-]?\d+\s*$/,
                    "message": "评分 must be an integer.",
                    "skipOnEmpty": 1
                });
            }
        }], []);
    });
    </div>
    `
    }
});
xtag.create('x-view', class extends XTagElement {
    set 'bookData::attr'(value) {
        // X-Tag automatically maps camel cased getter/setter names to their
        // dashed attribute equivalents. In this example, the `maxVolume` 
        // getter/setter pair maps to the `max-volume` attribute.
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
        <script src="/scripts/yii.validation.js"></script>
<script src="/scripts/yii.activeForm.js"></script>
<script>
    jQuery(function ($) {
        jQuery('#w0').yiiActiveForm([{
            "id": "book-name",
            "name": "name",
            "container": ".field-book-name",
            "input": "#book-name",
            "validate": function (attribute, value, messages, deferred, $form) {
                yii.validation.required(value, messages, {
                    "message": "书名 cannot be blank."
                });
                yii.validation.string(value, messages, {
                    "message": "书名 must be a string.",
                    "max": 50,
                    "tooLong": "书名 should contain at most 50 characters.",
                    "skipOnEmpty": 1
                });
            }
        }, {
            "id": "book-author",
            "name": "author",
            "container": ".field-book-author",
            "input": "#book-author",
            "validate": function (attribute, value, messages, deferred, $form) {
                yii.validation.required(value, messages, {
                    "message": "作者 cannot be blank."
                });
                yii.validation.string(value, messages, {
                    "message": "作者 must be a string.",
                    "max": 50,
                    "tooLong": "作者 should contain at most 50 characters.",
                    "skipOnEmpty": 1
                });
            }
        }, {
            "id": "book-date",
            "name": "date",
            "container": ".field-book-date",
            "input": "#book-date",
            "validate": function (attribute, value, messages, deferred, $form) {
                yii.validation.required(value, messages, {
                    "message": "出版日期 cannot be blank."
                });
                yii.validation.string(value, messages, {
                    "message": "出版日期 must be a string.",
                    "max": 50,
                    "tooLong": "出版日期 should contain at most 50 characters.",
                    "skipOnEmpty": 1
                });
            }
        }, {
            "id": "book-score",
            "name": "score",
            "container": ".field-book-score",
            "input": "#book-score",
            "validate": function (attribute, value, messages, deferred, $form) {
                yii.validation.number(value, messages, {
                    "pattern": /^\s*[+-]?\d+\s*$/,
                    "message": "评分 must be an integer.",
                    "skipOnEmpty": 1
                });
            }
        }], []);
    });
</script>
    </div>`
    }
});