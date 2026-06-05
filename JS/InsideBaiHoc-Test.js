const params = new URLSearchParams(window.location.search);
const chuDeId = params.get('id') || '1';
let cauHienTai = 1;
let daTrả = false;

const chuDe = {
    "1": "Chào hỏi", "2": "Chữ cái", "3": "Gia đình",
    "4": "Biểu cảm", "5": "Thực phẩm", "6": "Con số",
};

const cauHoi = {
    "1": [
        {video:"https://drive.google.com/file/d/1Ycwf_lfqXrHwIUID0rZl9283PXuwNfFp/preview", dung: "Bạn khỏe không", sai:"Xin chào"},
        {video:"https://drive.google.com/file/d/1Vu8LHauCTBGsm-9rQyFN7fh3S4wKuSuS/preview", dung:"Tuổi", sai:"Gặp gỡ"},
        {video:"https://drive.google.com/file/d/1na26l5aS0CqVCvMjbtvASovU7jmaxqLb/preview", dung:"Lâu không gặp, bạn khỏe không", sai:"Tôi có quà tặng bạn, chúc sinh nhật vui vẻ"},
        {video:"https://drive.google.com/file/d/1G7tfRIXPMjEA2ggZljDyc3rHBfuFK7wi/preview", dung:"Bạn tên gì", sai:"Hôm nay sinh nhật tôi"},
        {video:"https://drive.google.com/file/d/1_WTAQX3BNQrZKMW0oBLGskzHXHVTtp8O/preview", dung:"Gặp gỡ", sai:"Năm sinh"}
    ],
    "2": [
        {video:"https://drive.google.com/file/d/1Yp09Dm3a9Sf2GAXrfJdAbOVj9xlchs6L/preview", dung: "Â", sai:"A"},
        {video:"https://drive.google.com/file/d/1XsMcNt8YILHANbyDuzNOCFgT16Ww1FY1/preview", dung: "Đ", sai:"D"},
        {video:"https://drive.google.com/file/d/1VIA-C8XI6FB3rNf18GN8njsgau_ynRa6/preview", dung: "H", sai:"K"},
        {video:"https://drive.google.com/file/d/1oM5M1fVw_zsVuZXFSAmTWNaLD1JabIzR/preview", dung: "Q", sai:"R"},
        {video:"https://drive.google.com/file/d/1hdrZ845EcPKE8HFDdkU-er9XXprEOY7j/preview", dung: "Dấu ngã", sai:"Dấu hỏi"}
    ],
    "3": [
        {video:"https://drive.google.com/file/d/1eFlTmi0FEHdkXHgmJEyoG3WxTnfDjxhC/preview", dung: "Gia đình", sai:"Chị gái"},
        {video:"https://drive.google.com/file/d/1Uzix79Xh9tmlgDv_sWaU__uC6xz1-bGB/preview", dung: "Chồng", sai:"Vợ"},
        {video:"https://drive.google.com/file/d/15IBaiMLzoNLzZpeLzvBhvusqii2UQQsT/preview", dung: "Ông ngoại", sai:"Bà ngoại"},
        {video:"https://drive.google.com/file/d/1IKS4wrcht-ulYob4mjW4lK8-3geEFZ7x/preview", dung: "Ông nội", sai:"Bà nội"},
        {video:"https://drive.google.com/file/d/1dgZUTLiirQgN6hf_uPVit_Ym9RIVbu9g/preview", dung: "Anh trai", sai:"Em"}
    ],
    "4": [
        {video:"https://drive.google.com/file/d/1T8KA_XWXCMXWBTtBYIBHHF5Orx6Hv3jr/preview", dung: "Ấn tượng", sai:"Ghét"},
        {video:"https://drive.google.com/file/d/1vUU9L8IA2tLnRUQhd93f6K90xfS-H782/preview", dung: "Buồn", sai:"Vui"},
        {video:"https://drive.google.com/file/d/18pbuiF-8zZSLGGuTmryukK_PSWgyI1pm/preview", dung: "Lo lắng", sai:"Ghen tị"},
        {video:"https://drive.google.com/file/d/1xajjEJWw_I_hCVs0dWPAsaaaMotZZVGc/preview", dung: "Sợ", sai:"Bình thường"},
        {video:"https://drive.google.com/file/d/1l7YuI4jSLjaLOGWbOxI7e_DS99c5QqT8/preview", dung: "Thất vọng", sai:"Tức giận"}
    ],
    "5": [
        {video:"https://drive.google.com/file/d/1gQGrkeZmQdXm2F9kokRL-Leto92y4Ge1/preview", dung: "Bạch tuột", sai:"Cơm"},
        {video:"https://drive.google.com/file/d/1kzP1jJSfI6_Bg9FrZGBIt7XYZZQ9eQ3Q/preview", dung: "Bánh mì", sai:"Bánh bao"},
        {video:"https://drive.google.com/file/d/1rpIoEo1TqEFNQve_DgdG4-KGSLXp_u97/preview", dung: "Cơm", sai:"Cá"},
        {video:"https://drive.google.com/file/d/1ixnJnC_QlKRCj4Tzz6w_vu6i0B-JDP_F/preview", dung: "Trứng", sai:"Thịt bò"},
        {video:"hhttps://drive.google.com/file/d/1Gn80fDsWhuwvggbnj1p-OW-uSZzk2q07/preview", dung: "Xôi", sai:"Phở"}
    ]
}

const dsCau = cauHoi[chuDeId] || [];

document.getElementById('chuDeTitle').textContent = `CHỦ ĐỀ ${chuDeId}`;
document.getElementById('chuDeSub').textContent = chuDe[chuDeId] || '';
document.getElementById('btnBack').href = `InsideBaiHoc.html?id=${chuDeId}`;

function renderCauList() {
    const list = document.getElementById('cauList');
    list.innerHTML = '';
    dsCau.forEach((_, i) => {
        const item = document.createElement('div');
        item.className = 'cau-item' + (i + 1 === cauHienTai ? ' active' : '');
        item.textContent = `Câu ${i + 1}`;
        item.onclick = () => goToCau(i + 1);
        list.appendChild(item);
    });
}

function shuffle(a, b) { return Math.random() - 0.5; }

function goToCau(so) {
    cauHienTai = so;
    daTrả = false;
    const cau = dsCau[so - 1];
    document.getElementById('mainVideo').src = cau.video;

    const dapAn = [
        { text: cau.dung, dung: true },
        { text: cau.sai, dung: false }
    ].sort(shuffle);

    const answersEl = document.getElementById('answers');
    answersEl.innerHTML = '';
    dapAn.forEach(da => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = da.text;
        btn.onclick = () => chonDapAn(btn, da.dung);
        answersEl.appendChild(btn);
    });

    renderCauList();
}

function chonDapAn(btn, laDung) {
    if (daTrả) return; 
    daTrả = true;

    const tatCaBtn = document.querySelectorAll('.answer-btn');
    tatCaBtn.forEach(b => b.disabled = true);

    if (laDung) {
        btn.classList.add('dung');
    } else {
        btn.classList.add('sai');
        // Hiện đáp án đúng
        tatCaBtn.forEach(b => {
            if (b.textContent === dsCau[cauHienTai - 1].dung) {
                b.classList.add('dung');
            }
        });
    }
}

function nextCau() {
    if (cauHienTai < dsCau.length) {
        goToCau(cauHienTai + 1);
    } else {
        document.getElementById('doneMessage').textContent =
            `Chúc mừng bạn đã hoàn thành Thử thách - ${chuDe[chuDeId]}! 🎉`;
        new bootstrap.Modal(document.getElementById('doneModal')).show();
    }
}

function quayLai() {
    window.location.href = `InsideBaiHoc.html?id=${chuDeId}`;
}

goToCau(1);
renderCauList();

const Guest = document.getElementById('guest');
const Account = document.getElementById('account');
const UserNameAccount = document.getElementById('UserNameAccount');
const LoggedInUser = localStorage.getItem("UserName");
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
