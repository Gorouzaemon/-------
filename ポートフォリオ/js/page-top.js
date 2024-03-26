function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){//上から200pxスクロールしたら
        $('#page-top').removeClass('LeftMove');//#page-topについているRightMoveというクラス名を除く
        $('#page-top').addClass('RightMove');//#page-topについているLeftMoveというクラス名を付与
    }else{
        if(
            $('#page-top').hasClass('RightMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
            $('#page-top').removeClass('RightMove');//LeftMoveというクラス名を除き
            $('#page-top').addClass('LeftMove');//RightMoveというクラス名を#page-topに付与
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
$('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
}, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
return false;//リンク自体の無効化
});
