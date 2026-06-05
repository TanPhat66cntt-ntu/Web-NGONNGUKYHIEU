const UserName = document.getElementById('txt-UserName');
const Password = document.getElementById('txt-Password');
const Message  = document.getElementById('message');
const BtnLogin = document.getElementById('btn-Login');
const Avatar   = document.getElementById('UserAvatar')
// thiết lập Event cho nút đăng nhập khi ấn

BtnLogin.addEventListener("click", function()
{
    // lấy giá trị khi nhập vào input form từ tên đn và mk , xóa khoảng trắng thừa
    const UserValue = UserName.value.trim();
    const PassValue = Password.value.trim();

    // kiểm tra điều kiện 1 : kiểm tra xem có bỏ trống ô nào không
    if (UserValue == "" || PassValue == "" )
    {
        Message.innerText = "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu";
        return;
    }

    // LẤY USER TỪ LOCALSTORAGE
    const UserData = localStorage.getItem("User_" + UserValue);

    if (!UserData) {
        Message.innerText = "Tài khoản không tồn tại!";
        return;
    }

    const User = JSON.parse(UserData);

    // kiểm tra điều kiện 2 : Kiểm tra xem tài khoản mk nhập vào có đúng không
    // dùng dấu === thay vì == là vì để kiểm tra nghiêm ngặt hơn == chứ mục đích vẫn là so sánh
    if (User.PassWord === PassValue)
    {
        // Nếu ĐÚNG : xóa chữ báo lỗi ( nếu có nhập sai tk mk trước đó) và báo thành công
        // dùng text-success ( dòng chữ màu xanh lá thành công) thay cho text-danger
        Message.className = "text-success d-block mt-1 fs-6 fw-medium";// Đổi class chữ đỏ thành chữ xanh
        Message.innerText = "Đăng nhập thành công!";
        // Lưu lại chính xác tài khoản đang chạy để trang account.html bốc dữ liệu ra hiển thị
        localStorage.setItem("UserName", User.UserName);
        localStorage.setItem("Avatar", User.Avatar);

        // Nhảy sang web trang chủ
        setTimeout(function()
        {
            window.location.href = "Trangchu.html";
        },1500); // nhảy trang sau 1,5s
    }
    else if (User.PassWord !== PassValue)
    {
        // Nếu SAI tk mk : hiển thị thông báo đỏ dưới ô mk
        Message.innerText = "Sai tên đăng nhập hoặc mật khẩu. Vui lòng kiểm tra lại!";
    }
});

// Thiết lập khi đăng nhập bằng quyền quản trị viên 

// DÙNG TÀI KHOẢN DEMO LÀ QTV
const BtnAdmin = document.getElementById ("btn-LoginAdmin");
//  ===== TÀI KHOẢN ADMIN DEMO =====
const adminUser = "admin";
const adminPass = "123456";

//  ===== LOGIN ADMIN =====
BtnAdmin.addEventListener ("click",function()
{
    const user = UserName.value.trim();
    const pass = Password.value.trim();

    if (user === adminUser && pass === adminPass)
    {
        Message.innerText = "Đăng nhập Admin thành công!";
        Message.className = "text-success";
        setTimeout(() => {
            window.location.href = "admin.html"; // TRANG ADMIN
        }, 1000);
    }
    else
    {
        Message.innerText = "Không phải tài khoản quản trị viên!";
        Message.className = "text-danger";
    }
});