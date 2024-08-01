// menu.jsの内容
console.log('Menu script loaded');

document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.createElement("div");
    cursor.id = "cursor";
    document.body.appendChild(cursor);

    var stalker = document.createElement("div");
    stalker.id = "stalker";
    document.body.appendChild(stalker);

    document.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            cursor.classList.add("cursor--hover");
            stalker.classList.add("stalker--hover");
        });
        link.addEventListener("mouseleave", function() {
            cursor.classList.remove("cursor--hover");
            stalker.classList.remove("stalker--hover");
        });
    });

    document.addEventListener("mousemove", function(e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.opacity = "1";
        cursor.style.top = y + "px";
        cursor.style.left = x + "px";

        setTimeout(function() {
            stalker.style.opacity = "1";
            stalker.style.top = y + "px";
            stalker.style.left = x + "px";
        }, 150);
    });

    // メニューの初期化
    initializeMenu();

    // 画像の遅延読み込み
    var lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });


// メニューの初期化関数
function initializeMenu() {
    jQuery(document).ready(function($) {
        var $nav = $('#navArea');
        var $btn = $('.toggle_btn');
        var $mask = $('#mask');
        var open = 'open';

        $btn.on('click', function() {
            if (!$nav.hasClass(open)) {
                $nav.addClass(open);
            } else {
                $nav.removeClass(open);
            }
        });

        $mask.on('click', function() {
            $nav.removeClass(open);
        });
    });
}

});
