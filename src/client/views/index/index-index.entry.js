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
    'click::event'(e) {
        if (
            e.target.title === "Delete" ||
            e.target.parentNode.title === "Delete" ||
            e.target.parentNode.parentNode.title === "Delete"
        ) {
            location.href = "/";
        }
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