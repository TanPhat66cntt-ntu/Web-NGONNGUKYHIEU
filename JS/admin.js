// ============================================================
// KHỞI TẠO DỮ LIỆU MẪU
// ============================================================
function initSampleData() {
    if (!localStorage.getItem('admin_lessons')) {
        const sample = [
            { id: 1, title: 'Bài 1 - Bảng chữ cái ký hiệu', category: 'Cơ bản', desc: 'Học bảng chữ cái trong ngôn ngữ ký hiệu Việt Nam', video: '', duration: '15 phút', status: 'active', views: 0 },
            { id: 2, title: 'Bài 2 - Các con số 0-9', category: 'Cơ bản', desc: 'Học cách ký hiệu các con số từ 0 đến 9', video: '', duration: '10 phút', status: 'active', views: 0 },
            { id: 3, title: 'Bài 3 - Chào hỏi cơ bản', category: 'Giao tiếp', desc: 'Các ký hiệu chào hỏi thông dụng', video: '', duration: '12 phút', status: 'active', views: 0 },
            { id: 4, title: 'Bài 4 - Gia đình', category: 'Từ vựng', desc: 'Từ vựng về các thành viên trong gia đình', video: '', duration: '18 phút', status: 'active', views: 0 },
            { id: 5, title: 'Bài 5 - Màu sắc', category: 'Từ vựng', desc: 'Học ký hiệu các màu sắc cơ bản', video: '', duration: '10 phút', status: 'active', views: 0 },
            { id: 6, title: 'Bài 6 - Cảm xúc', category: 'Trung cấp', desc: 'Biểu đạt cảm xúc bằng ngôn ngữ ký hiệu', video: '', duration: '20 phút', status: 'active', views: 0 },
        ];
        localStorage.setItem('admin_lessons', JSON.stringify(sample));
    }

    if (!localStorage.getItem('admin_stats')) {
        const today = new Date().toDateString();
        const stats = {
            today: today,
            todayCount: 0,
            yesterdayCount: 0,
            weekData: [0, 0, 0, 0, 0, 0, 0]
        };
        localStorage.setItem('admin_stats', JSON.stringify(stats));
    } else {
        const stats = JSON.parse(localStorage.getItem('admin_stats'));
        const today = new Date().toDateString();
        if (stats.today !== today) {
            stats.yesterdayCount = stats.todayCount;
            stats.todayCount = 0;
            stats.today = today;
            stats.weekData.shift();
            stats.weekData.push(stats.yesterdayCount);
            localStorage.setItem('admin_stats', JSON.stringify(stats));
        }
    }

    if (!localStorage.getItem('admin_quizzes')) {
        localStorage.setItem('admin_quizzes', JSON.stringify([]));
    }
}

// ============================================================
// NAVIGATION
// ============================================================
const pageTitles = {
    'dashboard': 'Dashboard',
    'bai-hoc': 'Quản lý bài học',
    'them-bai': 'Thêm bài học',
    'nguoi-dung': 'Người dùng',
    'kiem-tra': 'Tạo kiểm tra'
};

function showPage(name, el) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    if (el) el.classList.add('active');
    document.getElementById('pageTitle').innerText = pageTitles[name] || '';

    if (name === 'dashboard') loadDashboard();
    if (name === 'bai-hoc') renderLessonTable();
    if (name === 'nguoi-dung') renderUserTable();
    if (name === 'them-bai') { resetForm(); document.getElementById('formTitle').innerText = 'Thêm bài học mới'; }
    if (name === 'kiem-tra') { renderQuizTable(); loadQuizLessons(); }
}

// ============================================================
// DASHBOARD
// ============================================================
let weekChartInstance = null;

function loadDashboard() {
    const stats = JSON.parse(localStorage.getItem('admin_stats'));
    const lessons = JSON.parse(localStorage.getItem('admin_lessons') || '[]');

    document.getElementById('statToday').innerText = stats.todayCount;
    document.getElementById('statYesterday').innerText = stats.yesterdayCount;
    const weekTotal = stats.weekData.reduce((a, b) => a + b, 0);
    document.getElementById('statWeek').innerText = weekTotal;
    document.getElementById('statLessons').innerText = lessons.length;
    document.getElementById('weekTotal').innerText = weekTotal;

    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    const ctx = document.getElementById('weekChart').getContext('2d');
    if (weekChartInstance) weekChartInstance.destroy();
    weekChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: 'Lượt truy cập',
                data: stats.weekData,
                backgroundColor: 'rgba(0,95,105,0.15)',
                borderColor: '#005f69',
                borderWidth: 2,
                borderRadius: 6,
                hoverBackgroundColor: 'rgba(0,95,105,0.35)'
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, ticks: { stepSize: 1, font: { size: 11 } }, grid: { color: '#f0f4f8' } },
                x: { ticks: { font: { size: 12 } }, grid: { display: false } }
            }
        }
    });

    const sorted = [...lessons].sort((a, b) => b.views - a.views).slice(0, 6);
    const rankClasses = ['gold', 'silver', 'bronze', '', '', ''];
    document.getElementById('topLessons').innerHTML = sorted.length === 0
        ? '<p style="color:#8a97a8;font-size:13px;text-align:center;padding:20px">Chưa có bài học nào</p>'
        : sorted.map((l, i) => `
            <div class="top-lesson-item">
                <div class="rank ${rankClasses[i]}">${i + 1}</div>
                <div class="lesson-name">${l.title}</div>
                <div class="lesson-views">${l.views} lượt</div>
            </div>`).join('');
}

function simulateVisit() {
    const stats = JSON.parse(localStorage.getItem('admin_stats'));
    stats.todayCount++;
    stats.weekData[stats.weekData.length - 1]++;
    localStorage.setItem('admin_stats', JSON.stringify(stats));
    if (document.getElementById('page-dashboard').classList.contains('active')) loadDashboard();
    showToast(' Đã ghi nhận 1 lượt truy cập mới!', 'success');
}

function openEdit(id) {
    const lessons = getLessons();
    const l = lessons.find(x => x.id === id);
    if (!l) return;
    editingId = id;
    document.getElementById('editTitle').value = l.title;
    document.getElementById('editCategory').value = l.category;
    document.getElementById('editDesc').value = l.desc || '';
    document.getElementById('editVideo').value = l.video || '';
    document.getElementById('editDuration').value = l.duration || '';
    document.getElementById('editStatus').value = l.status;
    new bootstrap.Modal(document.getElementById('editModal')).show();
}

function resetForm() {
    ['inputTitle','inputDesc','inputVideo','inputDuration'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('inputCategory').value = '';
    document.getElementById('inputStatus').value = 'active';
    document.getElementById('editLessonId').value = '';
}

// ============================================================
// TIỆN ÍCH
// ============================================================
function showToast(msg, type = '') {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.className = 'toast-noti ' + type;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2500);
}

function doLogout() {
    if (confirm('Bạn có muốn đăng xuất khỏi trang Admin không?')) {
        window.location.href = 'login.html';
    }
}

// ============================================================
// KHỞI CHẠY
// ============================================================
window.onload = function() {
    // Bỏ comment dòng dưới nếu muốn bảo mật trang admin
    // const isAdmin = localStorage.getItem('isAdmin');
    // if (!isAdmin) { window.location.href = 'login.html'; return; }

    initSampleData();
    loadDashboard();

    const adminName = localStorage.getItem('adminName') || 'Admin';
    document.getElementById('sidebarName').innerText = adminName;
};