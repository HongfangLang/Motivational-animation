/* 生成表盘 */

	var list = document.querySelector('.top_list');
	var inner = "";
	for(var i = 0; i < 60; i++){
		inner += '<li style="transform:rotate('+i*6+'deg)"></li>';
	}
	list.innerHTML = inner;
	

/* 时钟 */

	var hours = document.querySelector('#hours');
	var minutes = document.querySelector('#minutes');
	var seconds = document.querySelector('#seconds');
	toTime();
	setInterval(toTime,1000);
	function toTime(){
		var time = new Date();
		var timeSeconds = time.getSeconds();
		var timeMinutes = time.getMinutes() + timeSeconds/60;
		var timeHours = time.getHours() + timeMinutes/60;
		seconds.style.transform = "rotate("+timeSeconds*6+"deg)";
		minutes.style.transform = "rotate("+timeMinutes*6+"deg)";
		hours.style.transform = "rotate("+timeHours*30+"deg)";
	}
/* 鼠标移入，计时开始 */
	var click_1 = document.querySelector('#click_1');
	var wall_clock = document.querySelector('#wall_clock');
	// $('#ball').hide();
	