const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const menuLinks = document.querySelectorAll('.menu-link');

// 三本線ボタンをクリックしたときの処理
menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    menuBtn.classList.toggle('active'); // ★ボタン自身にも active を付け外しする
});

// メニューの中のリンクをクリックしたときにメニューを閉じる処理
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        sidebar.classList.remove('active');
        menuBtn.classList.remove('active'); // ★リンクを押したときもバツ印を三本線に戻す
    });
});