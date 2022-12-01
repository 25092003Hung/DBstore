function Xoalanmot() {
    if (document.getElementById('helloname').innerHTML != "") {
        document.getElementById('signin').style.display = "none";
        document.getElementById('signup').style.display = "none";
        document.getElementById('logout').style.display = "block";
        document.getElementById('helloname').style.display = "block";
    }
}
Xoalanmot();

document.getElementById('logout').onclick = function () {
    document.getElementById('signin').style.display = "block";
    document.getElementById('signup').style.display = "block";
    document.getElementById('helloname').style.display = "none";
    document.getElementById('logout').style.display = "none";
}


let soluong = document.getElementById('soluong');
let updatesoluong = document.getElementById('updatesoluong');

soluong.onclick = function () {
    console.log(soluong.value);
    if (soluong.value > 0) {
        updatesoluong.removeAttribute('disabled');
    }
    else if(soluong.value <0) {
        updatesoluong.setAttribute('disabled');
    }
}
