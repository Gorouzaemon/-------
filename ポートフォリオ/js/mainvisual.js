//  hamburgerのjs
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


// goemonの棒伸びるやつ
$(function(){
  $('.mainvisual-senten').hover(function(){
    $('.mainvisual-senten.border').addClass('grow');
  },funtion(){
    $('.mainvisual-senten.border').removeClass('grow');
  }
  )
});