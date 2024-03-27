//  hamburgerのjs
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a,.mainvisual").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


// goemonの棒伸びるやつ
$(function(){
    $('.mainvisual-senten').hover(function(){
      if($('.border').hasClass('reverce')){
        $('.border').removeClass('reverce');
        $('.border').addClass('grow');
      }
  },function(){
    $('.border').removeClass('grow');
    $('.border').addClass('reverce');
  });
  });