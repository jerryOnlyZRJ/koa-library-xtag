const Rize = require('rize')
// 开启可视化e2e测试
// const rize = new Rize({
//     headless: false
// })
const rize = new Rize()

// test view logic
rize
    .goto('http://localhost:3000/')
    .click('tr[data-key="item.id"]:first-child .glyphicon')
    .waitForNavigation()
    .assertTitle("View")
    .assertSeeIn('.country-view h1', '遮蔽的天空')
//test create&update&delete logic
rize
    .goto('http://localhost:3000/')
    .click('.btn.btn-success')
    .waitForNavigation()
    .assertTitle("Create")
    .type('.form-group input[name="name"]', 'test')
    .type('.form-group input[name="author"]', 'test')
    .type('.form-group input[name="date"]', 'date')
    .type('.form-group input[name="score"]', '8')
    .click('.btn.btn-success')
    .waitForNavigation()
    .assertSee('test')
    .click('tr[data-key="item.id"]:last-child .glyphicon-pencil')
    .waitForNavigation()
    .assertTitle("Update")
    .assertSeeIn('.country-update h1', 'Update Book: test')
    .clear('.form-group input[name="name"]')
    .type('.form-group input[name="name"]', 'test2')
    .click('.btn.btn-success')
    .waitForNavigation()
    .assertSee('test2')
    .click('tr[data-key="item.id"]:last-child .glyphicon-trash')
    .end()