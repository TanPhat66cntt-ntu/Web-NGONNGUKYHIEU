// Gọi và đặt tên biến cho hộp thoại input và nút gửi otp trong js
const phoneInput = document.getElementById('phone-Input');
const btnSubmit = document.getElementById('btn-Submit');

// Thiết lập sự kiện cho nút button
btnSubmit.addEventListener('click',function()
{
    // Lấy số điện thoại nhập vào đặt vào biến phonenumber , dùng trim() để loại để khoảng trăng từ nút space
    const phoneNumber = phoneInput.value.trim();
    // dùng thẻ if để tạo điều kiện chỉ đc nhập 10 số điện thoại

    // Điều kiện 1: bỏ trống
    if (phoneNumber == "")
    {
        // dùng alert để hiển thị thông báo
        alert("Vui lòng nhập lại số điện thoại!");
        return;//chặn lại
    }

    // Điều kiện 2 : Không đúng 10 chữ số hoặc có chữ cái
    if (phoneNumber.length !== 10 || isNaN (phoneNumber))
    {
        alert("Số điện thoại không hợp lệ! Vui lòng nhập đúng 10 chữ số.");
        return; // chặn lại
    }
    // Còn lại thỏa
    alert ("Thành công ! Mã OTP đã được gửi.");
    window.location.href = "OTP.html"; //Nhảy trang otp
});
