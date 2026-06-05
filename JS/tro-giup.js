// Toggle FAQ item open/close
function toggle(item) {
  const isOpen = item.classList.contains('open');
  // Close all open items
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  // Open clicked item if it wasn't already open
  if (!isOpen) item.classList.add('open');
}

// Filter FAQ items based on search input
function filterFAQ() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const items = document.querySelectorAll('.faq-item');
  let anyVisible = false;

  items.forEach(item => {
    const qText = item.querySelector('.faq-q-text').textContent.toLowerCase();
    const aText = item.querySelector('.faq-answer-inner').textContent.toLowerCase();
    const dataQ = (item.getAttribute('data-q') || '').toLowerCase();
    const match = qText.includes(query) || aText.includes(query) || dataQ.includes(query);
    item.style.display = match ? '' : 'none';
    if (match) anyVisible = true;
  });

  // Show/hide "no results" message
  let noResult = document.getElementById('noResult');
  if (!noResult) {
    noResult = document.createElement('p');
    noResult.id = 'noResult';
    noResult.style.cssText = 'text-align:center;color:var(--text-secondary);font-size:14px;padding:2rem 0;display:none;';
    noResult.textContent = 'Không tìm thấy câu hỏi phù hợp.';
    document.getElementById('faqList').after(noResult);
  }
  noResult.style.display = (!anyVisible && query) ? 'block' : 'none';
}

// Keyboard: open FAQ on Enter, close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    const input = document.getElementById('searchInput');
    if (input && input.value) {
      input.value = '';
      filterFAQ();
    }
  }
});
