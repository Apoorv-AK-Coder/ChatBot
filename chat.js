let btn1 = document.getElementById("show");
let btn2 = document.getElementById("hide");

let x = document.getElementById("chat");



btn1.addEventListener("click", form2)
function form2() {
    // console.log("hi");
    if ((x.style.display = "none")) {
        x.style.display = 'block';
        btn1.style.display = 'none';
        btn2.style.display = 'block';
    }
    else {
        x.style.display = 'block';
    }
}

btn2.addEventListener("click", form1)
function form1() {
    if ((x.style.display = "block")) {
        x.style.display = 'none';
        btn1.style.display = 'block';
        btn2.style.display = 'none';
    }
    else {
        y.style.display = 'block';
    }
}