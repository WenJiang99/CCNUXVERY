function check() {
    const username = document.getElementById("username")["value"]
    const password = document.getElementById("password")["value"]
    if (username === "123" && password === "123") {
        alert("登录成功")
    } else {
        alert("登录失败")
    }

}

function init() {
    // check()
}

window.onload = init