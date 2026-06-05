// // lấy dữ liệu UserName đc lưu trong LocalStorage
// const UserName = localStorage.getItem("UserName");
// const Avatar   = localStorage.getItem("Avatar");
// // đặt tên biến
// const usernameSideBar = document.getElementById("UserName");
// const avatarSidebar   = document.getElementById("Avatar");

// // Kiểm tra đăng nhập
// if (!UserName)
// {
//     // nhảy về trang login nếu chưa login
//     window.location.href = "login.html";
// }
// else
// {
//     // hiển thị tên
//     if (usernameSideBar)
//     {
//         usernameSideBar.innerText = UserName;
//     }

//     // hiển thị avatar nếu có không thì dùng mặc định
//     if (avatarSidebar)
//     {
//         avatarSidebar.src = Avatar || "/imgs/avatar-mac-dinh-1.jpg";
//     }
// }

// // ===== XỬ LÝ LOGOUT =====
// const logoutBtn = document.getElementById("logout");

// if (logoutBtn)
// {
//     logoutBtn.addEventListener ("click" , function()
//     {
//         // Xóa dữ liệu user
//         localStorage.removeItem("UserName");
//         localStorage.removeItem("Avatar");

//         // Chuyển về login
//         window.location.href = "login.html";
//     });
// }

document.addEventListener ('DOMContentLoaded' , function()
{
    // =======================================================
    // 1. BẢO MẬT: CHẶNG KIỂM TRA ĐĂNG NHẬP
    // =======================================================
    const UserName = localStorage.getItem ("UserName");
    // Kiểm tra điều kiện đã đăng nhập hay chưa
    if (!UserName)
    {
        //Nếu CHƯA ĐĂNG NHẬP ở trang login thì nhảy về trang login để đăng nhập
        window.location.href = "login.html";
        return;
    }

    // =======================================================
    // 2. KHAI BÁO CÁC PHẦN TỬ CHUNG TRÊN GIAO DIỆN
    // =======================================================
    // Nhóm các thẻ hiển thị Tên (Header, Sidebar trái, Banner phải)

    const UName = [
        document.getElementById('UserNameAccount'),
        document.getElementById('UserName'),        
        document.getElementById('UserNameBanner')
    ];
    // Nhóm các thẻ hiển thị Ảnh đại diện

    const AT = [
        document.getElementById('UserAvatar'),     
        document.getElementById('Avatar'),         
        document.getElementById('AvatarBanner')
    ]

    // Các ô nhập dữ liệu trong Form
    const ProfileForm = document.getElementById('profile-form');
    const InputFullName = document.getElementById('FullName');
    const InputDate = document.getElementById('Date');
    const InputPassword = document.getElementById('InputPassword');
    const InputPhone = document.getElementById('phoneNumber');
    const InputAddress = document.getElementById('InputAddress');

    // =======================================================
    // 3. HÀM TỰ ĐỘNG ĐỔ DỮ LIỆU ĐĂNG NHẬP LÊN MÀN HÌNH
    // =======================================================
     function HienThiGiaoDien()
     {
        const currentUName = localStorage.getItem("UserName");
        const UserData = JSON.parse(localStorage.getItem("User_" + currentUName));

        const OutputName = UserData?.FullName || currentUName;
        const OutputAvatar = UserData?.Avatar || "../imgs/avatar-mac-dinh-1.jpg";

        // Đổi tên và ảnh đồng loạt ở các vị trí trên trang web
        UName.forEach (el => { if(el) el.innerText = OutputName; } );
        AT. forEach (el => { if(el) el.src = OutputAvatar; });

        // Đổ Ngày sinh, Password, SĐT, Địa chỉ từ LocalStorage
        if (InputDate) InputDate.value = UserData?.Date || "18-02-2006";

        // LẤY MẬT KHẨU CŨ: Lấy đúng mật khẩu đã lưu khi login, nếu chưa có mới hiện "******"
        if (InputPassword) InputPassword.value = UserData?.PassWord || "******";

        // hiển thị số đt
        if (InputPhone) InputPhone.value = UserData?.Phone || "";

        // hiển thị địa chỉ
        if (InputAddress) InputAddress.value = UserData?.Address || "";
     }

     // Chạy hàm hiển thị dữ liệu gốc ngay khi mở trang web lên
        HienThiGiaoDien();

        // 4. XỬ LÝ LƯU DỮ LIỆU MỚI KHI BẤM NÚT "CẬP NHẬT"
        if (ProfileForm)
        {
            ProfileForm.addEventListener ("submit" , function()
            {
                const HoVaTen = InputFullName.value.trim();
                
                if (HoVaTen =="")
                {
                    alert ("Vui lòng không để trống Họ và Tên!");
                    return;
                }
                // Lấy username đang đăng nhập (KHÔNG ĐỔI)
                    const UName = localStorage.getItem("UserName");

                    // Lấy dữ liệu user hiện tại
                    const UserData = JSON.parse(localStorage.getItem("User_" + UName));

                    // Cập nhật dữ liệu (KHÔNG ĐỔI username)
                    UserData.FullName = HoVaTen;
                    UserData.Date = InputDate.value.trim();
                    UserData.PassWord = InputPassword.value.trim();
                    UserData.Phone = InputPhone.value.trim();
                    UserData.Address = InputAddress.value.trim();

                    // Lưu lại đúng key cũ
                    localStorage.setItem("User_" + UName, JSON.stringify(UserData));

                    // vẫn giữ để header dùng
                    localStorage.setItem("UserPassword", UserData.PassWord);
                    localStorage.setItem("UserDate", UserData.Date);
                    localStorage.setItem("UserPhone", UserData.Phone);
                    localStorage.setItem("UserAddress", UserData.Address);

                // Gọi lại hàm để ép toàn bộ chữ hiển thị trên màn hình đổi theo ngay tức thì
                    HienThiGiaoDien();

                alert("Đã cập nhật thông tin tài khoản thành công!");
            });
        }

        // 5. NÚT ĐĂNG XUẤT
        // ===== XỬ LÝ LOGOUT =====
            const logoutBtn = document.getElementById("logout");

            if (logoutBtn)
            {
                logoutBtn.addEventListener ("click" , function()
                {
                    // Chuyển về login
                    localStorage.clear();
                    window.location.href = "login.html";
                });
            }
});
