// ヘッダーとフッターの読み込みと初期化
document.addEventListener("DOMContentLoaded", function() {
    fetch("head.html")
        .then(response => response.text())
        .then(headerData => {
            document.getElementById("head-container").innerHTML = headerData;
            // メニューの初期化を再度呼び出し
            initializeMenu();
        });
});
