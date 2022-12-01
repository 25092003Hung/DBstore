function Xoalanmot() {
    if (document.getElementById('helloname').innerHTML != "") {
        document.getElementById('signin').style.display = "none";
        document.getElementById('signup').style.display = "none";
        document.getElementById('logout').style.display = "block";
        document.getElementById('helloname').style.display = "block";
        document.getElementById('dangnhapshowcart').style.display = 'none';
    }
}
Xoalanmot();

document.getElementById('logout').onclick = function () {
    document.getElementById('signin').style.display = "block";
    document.getElementById('signup').style.display = "block";
    document.getElementById('helloname').style.display = "none";
    document.getElementById('logout').style.display = "none";
    document.getElementById('dangnhapshowcart').style.display = 'block';
}


let soluong = document.getElementById('soluong');
let updatesoluong = document.getElementById('updatesoluong');

function xoadisabled() {
    if (soluong.value > 0) {
        updatesoluong.removeAttribute('disabled');
    }
}

xoadisabled();

soluong.onclick = function () {
    console.log(soluong.value);
    if (soluong.value > 0) {
        updatesoluong.removeAttribute('disabled');
    }
    else if (soluong.value <= 0) {
        updatesoluong.setAttribute('disabled','');
    }
}



//function submitRegister() {
//    var email = document.getElementById('EmailCus').value;
//    var password = document.getElementById('Password').value;
//    var name = document.getElementById('NameCus').value;
//    var phone = document.getElementById('PhoneCus').value;
//    var username = document.getElementById('UserName').value;
//    var valid = true;
//    console.log(email, password, name, phone, username);
//    // kiem tra gender
//    valid &= validation.kiemTraRong(username, 'err_user', 'UserName');
//    // Kiem tra email
//    valid &= validation.kiemTraRong(email, 'err_email', 'Email')
//        && validation.kiemTraEmail(email, 'err_email');
//    // Kiem tra password
//    valid &= validation.kiemTraRong(password, 'err_password', 'Password');
//    // kiem tra name & phone
//    valid &= validation.kiemTraRong(name, 'err_name', 'Name');
//    valid &= validation.kiemTraRong(phone, 'err_phone', 'Phone')
//        && validation.kiemTraPhone(phone, 'err_phone', 'Phone');

//    if (!valid) {
//        document.getElementById('create').removeAttribute = 'disabled';
//    }
//}

