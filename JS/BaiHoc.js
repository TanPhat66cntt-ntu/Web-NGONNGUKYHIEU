const Guest = document.getElementById('guest');
const Account = document.getElementById('account');
const UserNameAccount = document.getElementById('UserNameAccount');

// Kiểm tra xem trong kho localstorage có lưu tên đăng nhập nào không
const LoggedInUser = localStorage.getItem("UserName");

// nếu CÓ
if (LoggedInUser) {
    // ✅ Xóa d-lg-block luôn
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

function filterTopics(cat, btn) {
    document.querySelectorAll('.topic-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.topic-card').forEach(card => {
        card.classList.toggle('d-none', card.dataset.cat !== cat);
    });
}