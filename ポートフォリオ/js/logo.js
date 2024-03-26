function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1070){//上から200pxスクロールしたら
        $('.studio').removeClass('LeftMove');//#page-topについているRightMoveというクラス名を除く
        $('.studio').addClass('RightMove');//#page-topについているLeftMoveというクラス名を付与
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
