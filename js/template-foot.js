// ヘッダーとフッターの読み込みと初期化
document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(footerData => {
            document.getElementById("footer-container").innerHTML = footerData;
        });
});