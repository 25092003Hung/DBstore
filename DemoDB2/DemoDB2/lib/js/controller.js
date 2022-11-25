function xoaSignIn() {
    if (document.getElementById('helloname').innerHTML != "") {
        document.getElementById('signin').style.display = "none";
        document.getElementById('signup').innerHTML = "Log Out";
    }
}
xoaSignIn();

function xoaDangNhap() {
    if (document.getElementById('helloname').innerHTML != "") {
        document.getElementById('dangnhapshowcart').style.display = "none";
    }
}
xoaDangNhap();