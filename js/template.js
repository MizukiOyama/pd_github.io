// ヘッダーとフッターの読み込みと初期化
document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(headerData => {
            document.getElementById("header-container").innerHTML = headerData;
            // メニューの初期化を再度呼び出し
            initializeMenu();
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(footerData => {
            document.getElementById("footer-container").innerHTML = footerData;
        });
});
