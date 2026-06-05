// gọi id nút xác nhận và hộp thoại mã OTP trong html và đặt tên cho nó để gọi và code cho nó 
// trong javasript
const btnConfirm = document.getElementById('btn-Confirm');
const OTPInput   = document.getElementById('OTPInput');
// Thiết lập sự kiện khi ấn nút
btnConfirm.addEventListener('click',function()
{
    // lấy mã otp sẽ nhập và đặt tên biến cho mã đó để dùng
    const Ma_OTP = OTPInput.value.trim() 
    // dùng thẻ if
    if (Ma_OTP == "")
    {
        alert ("Vui lòng nhập mã OTP!");
        return;
    }
    // không cho phép nhập chữ cái
    if (isNaN (Ma_OTP))
    {
        alert ("Vui lòng nhập mã OTP!");
    }
    //  còn lại thỏa
    alert ("Nhập mã thành công !");
    window.location.href ="ResetPassword.html"; //nhảy trang 
});
