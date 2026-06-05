
    const params = new URLSearchParams(window.location.search);
    const chuDeId = params.get('id') || '1';
    const phan = parseInt(params.get('phan')) || 1;
    let cauHienTai = 1;

    // ✅ Điền link video của bạn vào đây
    const videos = {
        "1": [
            "https://drive.google.com/file/d/1Ycwf_lfqXrHwIUID0rZl9283PXuwNfFp/preview", 
            "https://drive.google.com/file/d/1lwE-EjT77UMV--jbUwIwVeBTV5mH4crC/preview", 
            "https://drive.google.com/file/d/1SHVCyp0OXdLLFLHTTwNlsPtCLe8-5Wo9/preview",
            "https://drive.google.com/file/d/1Vu8LHauCTBGsm-9rQyFN7fh3S4wKuSuS/preview",
            "https://drive.google.com/file/d/1_WTAQX3BNQrZKMW0oBLGskzHXHVTtp8O/preview",
            "https://drive.google.com/file/d/1na26l5aS0CqVCvMjbtvASovU7jmaxqLb/preview",//
            "https://drive.google.com/file/d/14P5xfTjuh2OfxexMdLuZu5pYLmDpniaS/preview",//
            "https://drive.google.com/file/d/1B3y6h2u1CS1uuvL2s8zyhoJWiCUkUbzm/preview",//
            "https://drive.google.com/file/d/1G7tfRIXPMjEA2ggZljDyc3rHBfuFK7wi/preview",//
            "https://drive.google.com/file/d/1FsQKHRB-w0to63v0RxzqC8KdrUVU4No1/preview" 
        ],
        "2": [
            "https://drive.google.com/file/d/1wC9rKBO5apsI-r2he5KGskSXBDH_Swe3/preview",//A
            "https://drive.google.com/file/d/1KQ2LMhUVGmmY3hn7J4kAZdxJ3HcmI2AK/preview",//B
            "https://drive.google.com/file/d/1XXwzO3rvzoEbKVxRdjub9DtJTuTOR3tq/preview",//C
            "https://drive.google.com/file/d/1U5CpJXWd0djODlTgX5EP97BgERNU0IIS/preview",//D
            "https://drive.google.com/file/d/1XsMcNt8YILHANbyDuzNOCFgT16Ww1FY1/preview",//Đ
            "https://drive.google.com/file/d/1zWYRJj0QkbmZ0cGR8xSac-7kv51UzNPj/preview",//E
            "https://drive.google.com/file/d/1zWYRJj0QkbmZ0cGR8xSac-7kv51UzNPj/preview",//G
            "https://drive.google.com/file/d/1VIA-C8XI6FB3rNf18GN8njsgau_ynRa6/preview",//H
            "https://drive.google.com/file/d/1s3aM_fOp81fMcABmTjblBoqB63eFvJMd/preview",//I
            "https://drive.google.com/file/d/1UtcbEWDJ82CNDZq85EdaF8ZCGVAlLyE6/preview",//K
            "https://drive.google.com/file/d/1Es7-BURhFKk9_2YEu0Jx8sPMe0i5txJw/preview",//L
            "https://drive.google.com/file/d/1KnWCWV-5mbp92LSPiDxEkBaN0RD8Zy6a/preview",//M
            "https://drive.google.com/file/d/1T861QXV2a5WUnc0rZEkKj9dUYVUeWAu9/preview",//N
            "https://drive.google.com/file/d/1zCrmXj3zsjnT2UeLDGNMP_swA3ULm-ni/preview",//O
            "https://drive.google.com/file/d/1S5NmAzAXJsbjtgP_9VNtk-iJt_e-BNWa/preview",//P
            "https://drive.google.com/file/d/1oM5M1fVw_zsVuZXFSAmTWNaLD1JabIzR/preview",//Q
            "https://drive.google.com/file/d/1CujqpDua5BJzoPWRdR9wKGXQ2MTuu6TA/preview",//R
            "https://drive.google.com/file/d/1W26TdRDVmHOTggwVUhfOpf9IhD-KVV62/preview",//S
            "https://drive.google.com/file/d/1lqSl1inNaK0IJ4CviRwsfiZZfErzkLaq/preview",//T
            "https://drive.google.com/file/d/1OJxPvK-sRMaubxvJ5FDMQizDTi8dHX7t/preview",//U
            "https://drive.google.com/file/d/1Kh8oAsAkP4a7RevDZFxQzL7JJ_vwM9i0/preview",//V
            "https://drive.google.com/file/d/1dWsz-sFkkE6hbK5X67tBt1smU1TPgEzO/preview",//X
            "https://drive.google.com/file/d/1i0mTF-mk9hwuZcGmiww2S_jdV4GsQMb9/preview",//Y
            "https://drive.google.com/file/d/1AnC5fM6QGEAjMTRCjISD78VbS1uPokEg/preview", // dấu sắc
            "https://drive.google.com/file/d/1b74rG01KSGT9NkzBOuOOl-M2QLCR0sjg/preview", // dấu huyền
            "https://drive.google.com/file/d/1AScQkkGtLjZdAQAHXxARalvkkZnfjoOu/preview", // dấu nặng
            "https://drive.google.com/file/d/1hdrZ845EcPKE8HFDdkU-er9XXprEOY7j/preview", // dấu hỏi
            "https://drive.google.com/file/d/1ceEGcK7Q11okN_dA_creqNM19FbOWU3m/preview", // dấu ngã
            "https://drive.google.com/file/d/1PtaxKghbkysrUNvqiPqihG9v7Sxz4esY/preview", // dấu ^
            "https://drive.google.com/file/d/1Yp09Dm3a9Sf2GAXrfJdAbOVj9xlchs6L/preview", // â
            "https://drive.google.com/file/d/1GQfwtSPpEKLYRdcp-FlUP1T-s1jdKZrB/preview",//ă
            "https://drive.google.com/file/d/16tazJAfN_uTa6b59jHbOQGChItsykZkd/preview",//ê
            "https://drive.google.com/file/d/1NkOvD4pObNQBGB5_Y34ncDqXLAoa4THv/preview"//ư
        ],
        "3": [
            "https://drive.google.com/file/d/1eFlTmi0FEHdkXHgmJEyoG3WxTnfDjxhC/preview",//Gia đình
            "https://drive.google.com/file/d/1dgZUTLiirQgN6hf_uPVit_Ym9RIVbu9g/preview",//Anh trai
            "https://drive.google.com/file/d/1w4juZVX5z5XjKbE2ckJJUE0I8_mjMEv-/preview",//Bà ngoại
            "https://drive.google.com/file/d/1LmgfGXjs0yRSbqgkY_D2T3KFUqUowfnM/preview",//Bà nội
            "https://drive.google.com/file/d/1hvbNEhOY4-zwnBTy6WZox4uoDyQJOplF/preview",//Ba
            "https://drive.google.com/file/d/1p8RGlo7KKsahPUYNmzKsAclQufY60JvR/preview",//Chị gái
            "https://drive.google.com/file/d/1Uzix79Xh9tmlgDv_sWaU__uC6xz1-bGB/preview",//Chồng
            "https://drive.google.com/file/d/1iZDOlCPy5O_8sesex7NJkC4nQBzYPD51/preview",//Chú
            "https://drive.google.com/file/d/1-g6p3GK9PWtqR1lJutNDHEuPPCC8z6Ht/preview",//Cô
            "https://drive.google.com/file/d/1SF7cDCrSsLGu3QCD2gTcVz_r_t7o7PY0/preview",//Em
            "https://drive.google.com/file/d/1enjnDBgJ6VlMF8npXUFDb9GciSKyBlYX/preview",//Má
            "https://drive.google.com/file/d/15IBaiMLzoNLzZpeLzvBhvusqii2UQQsT/preview",//Ông ngoại
            "https://drive.google.com/file/d/1IKS4wrcht-ulYob4mjW4lK8-3geEFZ7x/preview",//Ông nội
            "https://drive.google.com/file/d/1Zy8GmJKwgU3l47s4OkcBprCCBwhV-xlL/preview"//Vợ
        
        ],
        "4": [
            "https://drive.google.com/file/d/1T8KA_XWXCMXWBTtBYIBHHF5Orx6Hv3jr/preview",
            "https://drive.google.com/file/d/1WZLiuUXJLVB48N0VW-lCWwKqWgXy-v7D/preview",
            "https://drive.google.com/file/d/1vUU9L8IA2tLnRUQhd93f6K90xfS-H782/preview",
            "https://drive.google.com/file/d/1NLXUjiE7spfhqaVgBtTiCmdtCfHrOO3s/preview",
            "https://drive.google.com/file/d/1nu7hZj1QWIQscL7fI_vZYxeDRWbAOchD/preview",
            "https://drive.google.com/file/d/18pbuiF-8zZSLGGuTmryukK_PSWgyI1pm/preview",
            "https://drive.google.com/file/d/13axIhiTENqcbQ1_qILP9Mm8YQvNm0SZM/preview",
            "https://drive.google.com/file/d/1v5sE73wjT6GP5jCxdjdZMheVor1uVf6o/preview",
            "https://drive.google.com/file/d/1xajjEJWw_I_hCVs0dWPAsaaaMotZZVGc/preview",
            "https://drive.google.com/file/d/1Cm4J8_2HwcQBJU6EXJ4cmjAlSR2sON_m/preview",
            "https://drive.google.com/file/d/1l7YuI4jSLjaLOGWbOxI7e_DS99c5QqT8/preview",
            "https://drive.google.com/file/d/1cdQwsmkXDf8GGjiuBuIa7DlddTH7dpt1/preview",
            "https://drive.google.com/file/d/1cdQwsmkXDf8GGjiuBuIa7DlddTH7dpt1/preview",
            "https://drive.google.com/file/d/1tceudfS8Jk-oXsRhgrmLLu2nPoZKQPy3/preview"
        ],
        "5": [
            "https://drive.google.com/file/d/1gQGrkeZmQdXm2F9kokRL-Leto92y4Ge1/preview",
            "https://drive.google.com/file/d/1LYzZjKN1lGzdDcxh3x7gqZskbD_olPx7/preview",
            "https://drive.google.com/file/d/1kzP1jJSfI6_Bg9FrZGBIt7XYZZQ9eQ3Q/preview",
            "https://drive.google.com/file/d/18TC6L0H50sCDqb6rH0P52sWvEFnZ3cr2/preview",
            "https://drive.google.com/file/d/1rpIoEo1TqEFNQve_DgdG4-KGSLXp_u97/preview",
            "https://drive.google.com/file/d/1wL3kAGKo-ZkEPY-FNR2zHSuVrv6IGXeT/preview",
            "https://drive.google.com/file/d/18omhrzdTQcREk1PDy1OvUtsBG5WpfUFD/preview",
            "https://drive.google.com/file/d/1Lo0xWvqZYzM2sWQZBmq13mSkWoQ0avgi/preview",
            "https://drive.google.com/file/d/1lAWaJy_cjPFZZmZxZ0--vcaQEmXwSl9H/preview",
            "https://drive.google.com/file/d/12nUCpK2VTnRxp7LrOTdtuyOEAhRBwohh/preview",
            "https://drive.google.com/file/d/1ixnJnC_QlKRCj4Tzz6w_vu6i0B-JDP_F/preview",
            "https://drive.google.com/file/d/1Gn80fDsWhuwvggbnj1p-OW-uSZzk2q07/preview"
        ]

    };

    const chuDe = {
        "1": "Chào hỏi",
        "2": "Chữ cái",
        "3": "Gia đình",
        "4": "Biểu cảm",
        "5": "Thực phẩm",
        "6": "Con số",
    };

    const tenCau = {
        "1" :["Bạn khỏe không","Xin chào","Xin chào, rất vui được gặp bạn","Tuổi","Gặp gỡ","Lâu không gặp, bạn khỏe không","Năm sinh","Tôi có quà tặng bạn, chúc sinh nhật vui vẻ","Bạn tên gì","Hôm nay sinh nhật tôi"],
        "2" :["A","B","D","Đ","E","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Dấu sắc","Dấu huyền","Dấu nặng","Dấu hỏi","Dấu ngã","Dấu ^","â","ă","ê","ư"],
        "3" :["Gia đình","Anh trai","Bà ngoại","Bà nội","Ba","Chị gái","Chồng","Chú","Cô","Em","Má","Ông ngoại","Ông nội","Vợ"],
        "4" :["Ấn tượng","Bình thường","Buồn","Ghen tị","Ghét","Lo lắng","Mệt","Ngạc nhiên","Sợ","Thất vọng","Tức giận","Vui","Xấu hổ"],
        "5" :["Bạch tuột","Bánh bao","Bánh mì","Cá","Cơm","Hủ tiếu","Phở","Thịt bò","Thịt gà","Thịt heo","Trứng","Xôi"]
    }

    document.getElementById('chuDeTitle').textContent = `CHỦ ĐỀ ${chuDeId} - PHẦN ${phan}`;
    document.getElementById('chuDeSub').textContent = chuDe[chuDeId] || '';
    document.getElementById('btnBack').href = `InsideBaiHoc.html?id=${chuDeId}`;

    const tatCa = videos[chuDeId] || [];
    const giua = Math.ceil(tatCa.length / 2);
    const videoPhan = phan === 1 ? tatCa.slice(0, giua) : tatCa.slice(giua);

    function renderCauList() {
        const list = document.getElementById('cauList');
        list.innerHTML = '';
        for (let i = 1; i <= videoPhan.length; i++) {
            const item = document.createElement('div');
            item.className = 'cau-item' + (i === cauHienTai ? ' active' : '');
            item.textContent = `Câu ${i}`;
            item.onclick = () => goToCau(i);
            list.appendChild(item);
        }
    }

    function goToCau(so) {
        cauHienTai = so;
        document.getElementById('mainVideo').src = videoPhan[so - 1];

        const index = phan === 1 ? so - 1 : giua + so - 1;
        const ten = tenCau[chuDeId]?.[index] || `Câu ${so}`;
        document.getElementById('videoLabel').textContent = ten;
        renderCauList();
    }

    function nextCau() {
        console.log('cauHienTai:', cauHienTai, 'length:', videoPhan.length);
        if (cauHienTai < videoPhan.length) {
            goToCau(cauHienTai + 1);
        } else {
            document.getElementById('doneMessage').textContent = 
            `Chúc mừng bạn đã hoàn thành Phần ${phan} - ${chuDe[chuDeId]}! 🎉`;
            new bootstrap.Modal(document.getElementById('doneModal')).show();
        }
    }
    function quayLai() {
    window.location.href = `InsideBaiHoc.html?id=${chuDeId}`;
    }
    // Load câu đầu tiên
    renderCauList();
    goToCau(1);
const Guest = document.getElementById('guest');
const Account = document.getElementById('account');
const UserNameAccount = document.getElementById('UserNameAccount');
const LoggedInUser = localStorage.getItem("UserName");

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