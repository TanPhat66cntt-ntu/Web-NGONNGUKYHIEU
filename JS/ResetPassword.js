const NewPassword = document.getElementById('NewPassword');
const ConfirmPassword = document.getElementById('ConfirmPassword');
const ThongBao = document.getElementById('thongbao');
const btnSubmit = document.getElementById('btn-Submit');

btnSubmit.addEventListener('click' , function()
{
    // lấy dữ liệu người dùng nhập vào ( có thể không dùng 2 lệnh này )
    // Nhưng ghi viết lệnh thì phải dùng cả câu NewPassword.value.trim();/ConfirmPassword. value . trim(); thay vì dùng tên để đặt cho lệnh đó

    const PassValue = NewPassword.value.trim();
    const ConfirmValue = ConfirmPassword. value . trim();
     
    // Kiểm tra điều kiện 1 : nếu bỏ trống
    if (PassValue == "" || ConfirmValue =="")
    {
        ThongBao.innerText = "Vui lòng nhập mật khẩu!";
        ThongBao.style.color = "#ef4444"; // màu đỏ cảnh báo
        return;
    }

    // Kiểm tra điều kiện 2: 2 mật khẩu có khớp với nhau không
    if (PassValue !== ConfirmValue)
    {
        ThongBao.innerText = "Mật khẩu xác nhận không khớp. Vui lòng nhập lại!";
        ThongBao.style.color = "#ef4444"; // Màu đỏ lỗi
        return;
    }

    // TRƯỜNG HỢP THÀNH CÔNG
    // Hiển thị thông báo thành công dưới ô xác nhận mk
    ThongBao.innerText = " Đổi mật khẩu thành công! Đang quay lại trang đăng nhập";
    ThongBao.style.color = "#10b981" // màu xanh lá thành công
    
    // Nhảy về trang đăng nhập sau khi đếm ngược 2s
    setTimeout(function() {
        window.location.href = "login.html"; // Nhảy về trang đăng nhập
    }, 2000);
}
);