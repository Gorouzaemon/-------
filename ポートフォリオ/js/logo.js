function setFadeElement(){
	var windowH = $(window).height();	//ウィンドウの高さを取得
	var scroll = $(window).scrollTop(); //スクロール値を取得
    
    //出現範囲の指定
	var contentsTop = Math.round($('#mysite').offset().top);	//要素までの高さを四捨五入した値で取得
	
    
    //2つ目の出現範囲の指定※任意
	//var contentsTop2 = Math.round($('#area-5').offset().top);	//要素までの高さを取得
	//var contentsH2 = $('#area-5').outerHeight(true);//要素の高さを取得

    //出現範囲内に入ったかどうかをチェック
	if(scroll+windowH >= contentsTop){
$(".openbtn").addClass("leftMove"); //入っていたらLeftMoveをクラス追加
$(".openbtn").removeClass("rightMove"); //RightMoveを削除
} else{
    $(".openbtn").addClass("rightMove"); //入っていたらLeftMoveをクラス追加
$(".openbtn").removeClass("leftMove"); 
}
    	
	}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});
