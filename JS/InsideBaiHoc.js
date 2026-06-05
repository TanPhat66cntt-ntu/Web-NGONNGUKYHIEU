const Guest = document.getElementById('guest');
const Account = document.getElementById('account');
const UserNameAccount = document.getElementById('UserNameAccount');

// Kiểm tra xem trong kho localstorage có lưu tên đăng nhập nào không
const LoggedInUser = localStorage.getItem("UserName");

// nếu CÓ
if (LoggedInUser) {
    Guest.classList.add('d-none');
    Guest.classList.remove('d-lg-block');

    Account.classList.remove('d-none');
    Account.classList.add('d-flex');
    UserNameAccount.innerText = LoggedInUser;

    // Mobile menu
    const guestMobile = document.getElementById('guestMobile');
    const accountMobile = document.getElementById('accountMobile');
    if (guestMobile) guestMobile.classList.add('d-none');
    if (accountMobile) {
        accountMobile.classList.remove('d-none');
        accountMobile.classList.add('d-flex');
        document.getElementById('UserNameMobile').textContent = LoggedInUser;
    }
} else {
    Guest.classList.remove('d-none');
    Guest.classList.add('d-lg-block');
    Account.classList.add('d-none');
}

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const chuDe = {
    "1": "Chủ đề 1: Chào hỏi",
    "2": "Chủ đề 2: Chữ cái",
    "3": "Chủ đề 3: Gia đình",
    "4": "Chủ đề 4: Biểu cảm",
    "5": "Chủ đề 5: Thực phẩm",
    "6": "Chủ đề 6: Con số",
};
document.getElementById('lessonTitle').textContent = chuDe[id];

document.querySelectorAll('.lesson-item').forEach((item, index) => {
    const phan = index + 1;
    if (phan === 3) {
        item.href = `InsideBaiHoc-Test.html?id=${id}`;
    } else {
        item.href = `InsideBaiHoc-Learn.html?id=${id}&phan=${phan}`;
    }
});