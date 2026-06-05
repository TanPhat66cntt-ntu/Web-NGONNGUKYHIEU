// Lấy biển từ html để đặt và dùng trong JS
const btnRegister = document.getElementById ("btn-Register");
const Message     = document.getElementById ("Message");

// Đặt tên cho input trong label
const inputUser = document.getElementById("UserName");
const inputEmail = document.getElementById("Email");
const inputPass = document.getElementById("PassWord");
const inputRepeatPass = document.getElementById("RepeatPassWord");

// Đặt Event khi click
btnRegister.addEventListener ("click" , function()
{
    const UserName = inputUser.value.trim();
    const Email = inputEmail.value.trim();
    const PassWord = inputPass.value.trim();
    const RepeatPassWord = inputRepeatPass.value.trim();

    // Đặt điều kiện 
    // Điều kiện 1 : Khi bỏ trống không nhập đủ thông tin
    if (UserName == "" || Email == "" || PassWord == "" || RepeatPassWord == "" )
    {
        Message.innerText = "Vui lòng nhập đầy đủ thông tin!" ;
        Message.className = "text-danger text-center mt-3" ; // text-danger : hiện dòng chữ màu đỏ cảnh báo
        return;
    }

    // Điều kiện 2: Mật khẩu và xác nhận mk không giống nhau
    if (PassWord !== RepeatPassWord)
    {
        Message.innerText = "Mật khẩu không khớp!";
        Message.className = "text-danger text-center mt-3";
        return;
    }
    // Điều kiện 3 : nếu bị trùng tên đăng nhập đối với tài khoản đã có
    if (localStorage.getItem ("User_" + UserName))
    {
        Message.innerText = "Tên đăng nhập đã tồn tại!";
        Message.className = "text-danger text-center mt-3";
        return;
    }

    // ===== TẠO USER =====
    const User =
    {
        UserName: UserName,
        Email: Email,
        PassWord: PassWord,
        Avatar: "../imgs/avatar-mac-dinh-1.jpg"
    };

    //  ===== LƯU TK ====
    localStorage.setItem ("User_" + UserName , JSON.stringify ( User ));
    // tự động đăng nhập sau khi đăng ký
    localStorage.setItem("UserName", UserName);
    localStorage.setItem("Avatar", User.Avatar);

    //  ===== THÀNH CÔNG =====
    Message.innerText = "Đăng ký thành công!";
    Message.className = "text-success text-center mt-3";

    //  ===== CHUYỂN HƯỚNG TRANG =====
    // ===== CHUYỂN TRANG =====
    setTimeout(() => {
        window.location.href = "Trangchu.html";
    }, 1500);
});