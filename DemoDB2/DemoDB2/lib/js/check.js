var validation = {
    kiemTraRong: function (value, errId, name) {
        //Nếu không hợp lệ thì hàm này return về false ngược lại return về true
        if (value.trim() === '') {
            document.getElementById(errId).style.display = 'block';
            document.getElementById(errId).innerHTML = `${name} cannot be blank!`;
            return false;
        }

        document.getElementById(errId).style.display = 'none';
        return true;
    },
    kiemTraKyTu: function (value, errId, name) {
        var regexLetter = /^[A-Z a-z]+$/;
        if (regexLetter.test(value)) {
            document.getElementById(errId).style.display = 'none';
            return true;
        }
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = `${name} must be characters!`;
        return false;
    },
    kiemTraEmail: function (value, errId) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(value)) {
            document.getElementById(errId).style.display = 'none';
            return true;
        }
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = 'Invalid Email format!';
        return false;
    },
    kiemTraPhone: function (value, errId, name) {
        var regex = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        if (regex.test(value)) {
            document.getElementById(errId).style.display = 'none';
            return true;
        }
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = `Invalid ${name} format!`;
        return false;
    },
    kiemTraSo: function (value, errId, name) {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            document.getElementById(errId).style.display = 'none';
            return true;
        }
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = `${name} must be a number!`;
        return false;
    },
    kiemTraDoDai: function (value, errId, name, minLength, maxLength) {
        if (value.length > maxLength || value.length < minLength) {
            document.getElementById(errId).style.display = 'block';
            document.getElementById(errId).innerHTML = `${name} must have length from ${minLength} to ${maxLength} characters!`;
            return false;
        }
        document.getElementById(errId).style.display = 'none';
        return true;
    },
    kiemTraGiaTri: function (value, errId, name, minValue, maxValue) {
        var newValue = Number(value);
        if (newValue > maxValue || newValue < minValue) {
            document.getElementById(errId).style.display = 'block';
            document.getElementById(errId).innerHTML = `${name} must be from ${minLength} to ${maxLength}!`
            return false;
        }
        document.getElementById(errId).style.display = 'none';
        return true;
    }

}

var create = document.getElementById('create');

document.getElementById('check').onclick = function () {
    var email = document.getElementById('EmailCus').value;
    var password = document.getElementById('Password').value;
    var name = document.getElementById('NameCus').value;
    var phone = document.getElementById('PhoneCus').value;
    var username = document.getElementById('UserName').value;
    var valid = true;
    console.log(email, password, name, phone, username);
    // kiem tra gender
    valid &= validation.kiemTraRong(username, 'err_user', 'UserName');
    // Kiem tra email
    valid &= validation.kiemTraRong(email, 'err_email', 'Email')
        && validation.kiemTraEmail(email, 'err_email');
    // Kiem tra password
    valid &= validation.kiemTraRong(password, 'err_password', 'Password');
    // kiem tra name & phone
    valid &= validation.kiemTraRong(name, 'err_name', 'Name');
    valid &= validation.kiemTraRong(phone, 'err_phone', 'Phone')
        && validation.kiemTraPhone(phone, 'err_phone', 'Phone');
    if (!valid) {
        return;
    }
    create.style.display = 'block';
}

//function Disabled() {
//    create.style.display = 'block'
//}
//Disabled();
