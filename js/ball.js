var click_1 = document.querySelector('#click_1');
var timer = 0;
var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var div2 = document.querySelector('#box2 .div2');
var ball = document.querySelector('.ball');
var top_list = document.querySelector('.top_list');
var ori = document.querySelector('.ori');
var box_2 = document.querySelector('#box2 .div ');
var wall_clock = document.querySelector('#wall_clock');
var mask = document.querySelector('.mask');
var wrap = document.querySelector('.wrap');
var details = document.querySelectorAll('.detail div');
var double = document.querySelector('#double');
var positive = document.querySelector('.positive');
var back = document.querySelector('.back');
var work = document.querySelector('.work');
var work1 = document.querySelector('.work1');
var last = document.querySelector('.last');
var detail = document.querySelector('.detail');
var line = document.querySelector('.line');
var list = document.querySelector('.list');
hide(); //红球消失
click_1.onclick = function(){  //页面左上侧的红色点击按钮
	// mask.style.background = 'pink'; 
	mask.style.opacity = '0.3';
	wrap.style.zIndex = '1002';
	wall_clock.style.width = '30px';
	wall_clock.style.height = '30px';
	wall_clock.style.background = 'red';
	top_list.style.display = 'none';
	ori.style.display = 'none';
	click_1.style.display = 'none';
	up();
};
function up(){  //立方体上升
	clearInterval(timer);
	timer = setInterval(function(){
		box1.style.display = 'none';
		wall_clock.style.display = 'none';
		down();
		var intro = document.createElement('div');
		intro.className = 'intro';
    	document.body.appendChild(intro);
    	intro.innerHTML = '时间如金需锤炼，化作珍品藏乾坤'
    	box2.onmousemove = function(){
    		intro.style.display = 'block';
    		intro.style.top = '10%';
    	}
	},3000);
};
function down(){ //立方体下降旋转
	clearInterval(timer);
	timer = setInterval(function(){
		box2.style.marginTop = '350px';
	},200);
};
box2.onclick = function(e){ //点击旋转的立方体
	//console.log(1);
	var pie = document.querySelectorAll('.pie');
	for(var i = 0; i < pie.length; i++){
		pie[i].style.display = 'none';
	}
	box_2.style.display = 'none'; //第一个立方体消失
	var intro = document.querySelector('.intro');
	intro.style.color = 'yellow';
	intro.innerHTML = "五星璀璨盛'作品',点击蓝作现真身";
	div2.style.width = '100px'; //旋转的盒子产生
	div2.style.height = '50px';
	div2.style.color = 'green';
	div2.style.marginTop = '110px';
	div2.style.marginBottom = '-200px';
	for (var i=0; i<10; i++) {
	   duang(e.clientX, e.clientY);  //跳动的彩球
	}
	var click_2 = document.createElement('div'); //这里的点击球其实没有实际功能，只是显示
	click_2.className = 'click_2';
    document.body.appendChild(click_2);
    click_2.innerHTML = '点我';
    // click_2.onclick = function(){
    // 	click_2.innerHTML = '作品';
    // }
};
function hide(){ //让6个红球消失
	for(var i = 0; i < details.length; i++){
		details[i].style.display = 'none';
	}
}
function show(){
	var name = document.querySelector('.name');
	var technology = document.querySelector('.technology');
	var other = document.querySelector('.other');
	var click_2 = document.querySelector('.click_2');
	for(var i = 0; i < details.length; i++){
		details[i].style.display = 'block'; //显示5个红球
		details[i].onclick = function(e){  //有问题，当点击时需点击两下，才能正常
			if(e.target.style.background == 'green'){
				e.target.style.background = 'red';
				double.style.display = 'none';
			}else{
				e.target.style.background = 'green';
				click_2.style.background = 'blue';
				click_2.style.cursor = 'pointer';
				person();
				double.style.display = 'block';
				double.style.marginTop = '18%';
				double.style.marginLeft = '39%';
				positive.innerHTML = '作品'+e.target.innerHTML;
				
				if(positive.innerHTML == '作品1'){
					name.innerHTML = '名称:日历';
					technology.innerHTML = '技术:时钟，月份及日期的推算';
					other.innerHTML = 'github:https://github.com/HongfangLang/10-24-';
				}
				if(positive.innerHTML == '作品2'){
					name.innerHTML = '名称:响应式';
					technology.innerHTML = '技术:页面呈现不同布局及样式';
					other.innerHTML = 'github:https://github.com/HongfangLang/xiangyingshi';
				}
				if(positive.innerHTML == '作品3'){
					name.innerHTML = '名称:碰撞切换';
					technology.innerHTML = '技术:鼠标拖拽不同状态回调';
					other.innerHTML = '难度系数:★';
				}
				if(positive.innerHTML == '作品4'){
					name.innerHTML = '名称:幻灯片';
					technology.innerHTML = '技术:定时器的状态过界处理';
					other.innerHTML = '难度系数:★★';
				}
				if(positive.innerHTML == '作品5'){
					name.innerHTML = '名称:qq.vip';
					technology.innerHTML = '技术:不同页面的html、css';
					other.innerHTML = 'github:https://github.com/HongfangLang/qq.vip';
				}
			}
		}
		
	}
	click_2.innerHTML = '作品';  //改变中间球的样式，显得更逼真立体
	click_2.style.zIndex = '1006';
	click_2.style.boxShadow = '0 0 20px rgba(0, 0, 0, .8), inset 0 0 10px rgba(0, 0, 0, .5)';
}
function duang(x, y) { // 呈现爆破的效果
	var click_2 = document.querySelector('.click_2');
    var box = document.createElement('div');
    box.className = 'box';
    document.body.appendChild(box);
    box.innerHTML = '●';
    box.style.width = Math.random() * 50 + 50 + 'px';
    box.style.height = Math.random() * 50 + 50 + 'px';
    box.style.fontSize = Math.random() * 25 + 100 + 'px';
    box.style.left = x - box.offsetWidth / 2 + 'px';
    box.style.top = y - box.offsetHeight / 2 + 'px';

    var colors = 'red,blue,green,orange,pink,black,purple'.split(',');
    colors.sort(function() {
        return Math.random() - 0.5;
    });
    box.style.color = colors[0];

    var speedX = Math.random() * 20 - 10;
    var speedY = -(Math.random() * 10 + 5);

    100 + -10

    box.timer = setInterval(function() {
        box.style.left = box.offsetLeft + speedX + 'px';
        box.style.top = box.offsetTop + speedY + 'px';
        speedY += 1;

        if (box.offsetTop + box.offsetHeight > document.documentElement.clientHeight) {
            clearInterval(box.timer);
            document.body.removeChild(box);
            box = null;
            show(); //红球显示
        }

    }, 16)
}

function person(){ //最后一个页面的显示
	var click_2 = document.querySelector('.click_2');
	click_2.onclick = function(e){
		var intro = document.querySelector('.intro');
		intro.style.display = 'none';
		// wrap.style.display = 'none';
		mask.style.opacity = '0';
		// mask.style.zIndex = '1100';
		click_2.style.display = 'none';
		double.style.display = 'none';
		box2.style.display = 'none';
		detail.style.display = 'none';
		line.style.display = 'block'
		list.style.zIndex = '2003';
		var last = document.createElement('div');
		last.className = 'last';
    	document.body.appendChild(last);
    	last.innerHTML = '简历';
    	var intro = document.querySelector('.intro');
    	intro.style.display = 'block';
    	intro.style.left = '39%';
    	intro.style.top = '50%';
    	intro.innerHTML = '电话:15121121504'
    	var email = document.createElement('div');
    	email.className = 'email';
    	document.body.appendChild(email);
    	email.style.display = 'block';
    	email.style.left = '39%';
    	email.innerHTML = '邮箱:jenny_lhf@163.com';
    	var basic = document.createElement('div');
		basic.className = 'basic';
    	document.body.appendChild(basic);
    	var p1 = document.createElement('p');
    	p1.className = 'p1';
    	p1.innerHTML = '姓名 : 梁红芳';
    	document.body.appendChild(p1);
    	var p2 = document.createElement('p');
    	p2.className = 'p2';
    	p2.innerHTML = '技能 : 1.运用HTML语义化标签+CSS3新特性进行页面布局,实现页面的动态效果及质量;2.有一定的原生JavaScript开发水平及相关经验;3.熟悉H5框架Bootstrap;4.熟悉DOM操作,对W3C标准有些许理解;5.熟练掌握PS切图软件;6.熟悉面向对象开发概念，具有快速学习的能力;7.熟悉掌握Ajax,JSON,JQ等前端相关技术;8.了解React的相关开发;9.对闭包、作用域及相关内容有深刻见解;10.具备良好的团队合作精神及抗压能力。';
    	document.body.appendChild(p2);
    	var pro = document.createElement('div');
    	pro.className = 'pro';
    	document.body.appendChild(pro);

    	// var list = document.createElement('ul');
    	// list.className = 'list';
    	document.body.appendChild(line);
    	run();
    	console.log(1);
	}
}
function run(){
	
	var list = document.querySelector('.list');
	var p = document.querySelectorAll('.line .list p');
	var imgW = css(p[0],"width");
	var now = 0;
	var timer = 0;
	startMove(p[now],{bottom: 0},300,"easeOut");
	timer = setInterval(function(){
		startMove(p[now],{bottom: -60},300,"easeOut",function(){//收起当前张的底部
			if(now == p.length-1){
				now = 0;
				css(list,"left",0);
			}
			now++;
			startMove(list,{left:-now*imgW},400,"easeOut",function(){//切换至下一张
				//升起底部
				startMove(p[now],{bottom: 0},300,"easeOut");
			});
		});
	},2000);
}


	// function down(){
	// 	var num = 0;
	// 	clearInterval(timer);
	// 	timer = setInterval(function(){
	// 		if(num>=wall_clock.length-1){
	// 			clearInterval(timer);
	// 			startMove(
	// 				wall_clock[num],
	// 				{
	// 					marginTop:400
	// 				},
	// 				300,
	// 				'bounceOut',
	// 			);
	// 		}else{
	// 			startMove(
	// 				wall_clock[num],
	// 				{
	// 					marginTop:400
	// 				},
	// 				300,
	// 				'bounceOut'
	// 			);
	// 			num++;
	// 		}
	// 	},50);

	// }
// 	function drag(init){
// 	var el = init.el;
// 	el.onmousedown = function(e){
// 		var startMouse = {
// 			x: e.clientX,
// 			y: e.clientY
// 		};
// 		var startEl = {
// 			x: el.offsetLeft,
// 			y: el.offsetTop
// 		};
// 		init.start&&init.start();
// 		document.onmousemove = function(e){
// 			var nowMouse = {
// 				x: e.clientX,
// 				y: e.clientY		
// 			};
// 			var dis = {
// 				x: nowMouse.x - startMouse.x,
// 				y: nowMouse.y - startMouse.y	
// 			};
// 			var now = {
// 				x: startEl.x + dis.x,
// 				y: startEl.y + dis.y
// 			};
// 			el.style.left = now.x + "px";
// 			el.style.top = now.y + "px";
// 			init.move&&init.move();
// 		};
// 		document.onmouseup = function(){
// 			document.onmousemove = null;
// 			document.onmouseup = null;
// 			init.end&&init.end();
// 		};
// 		return false;
// 	};
// }


	