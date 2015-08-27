$(document).ready(function(){
	var _move = false ; //移动标记
	var _x,_y;//鼠标离控件左上角的相对位置
	
	$("#js_drag").click(function(){
		console.info("123");
	}).mousedown(function(e){
		_move = true;
		_x = e.pageX-parseInt($("#js_drag").css("left"));
		_y = e.pageY-parseInt($("#js_drag").css("top"));
		$("#js_drag").fadeTo(20, 0.5); //点击后开始拖动并透明显示
	});
	$(document).mousemove(function(e){
		if(_move){
			var x = e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置
			var y = e.pageY-_y;
			$("#js_drag").css({top:y,left:x});//控件新位置
		}
	}).mouseup(function(){
		_move = false;
		$("js_drag").fadeTo("fast",1);//松开鼠标后停止并恢复成不透明
	});
	
}); 