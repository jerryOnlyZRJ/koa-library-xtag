var inputs = document.querySelectorAll('.form-group input[type="text"]');
var submitBtn = document.querySelector(".btn.btn-success");
var clickHandler = debounce(function(e) {
  var data = {};
  inputs.forEach(function(item) {
    data[item.name] = item.value;
  });
  fetch("/api/create", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json" // 指定提交方式为表单提交
    }),
    body: JSON.stringify(data)
  })
    .then(res => {
      location.href = "/";
    })
    .catch(console.log);
});
submitBtn.addEventListener("click", clickHandler);
