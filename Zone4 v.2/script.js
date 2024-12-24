document.querySelector('.search-bar input').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const monsterName = row.querySelector('td').textContent.toLowerCase();
        row.style.display = monsterName.includes(query) ? '' : 'none';
    });
});

