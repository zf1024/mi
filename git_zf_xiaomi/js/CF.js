var arrs = document.querySelectorAll("nav a");
var Lis = document.querySelectorAll("ul li");
var circles = document.querySelectorAll("ol li");
var box = document.querySelector("#flash");
var flag=0;
//轮播初始化
function playinit(flag) {
	for(i=0;i<Lis.length;i++){
		Lis[i].className="";
		circles[i].className="";
	}
	Lis[flag].className="now";
	circles[flag].className="nowx";
}
//向左轮播
var pre=function(){
	flag--;
	if(flag<0){
		flag=Lis.length-1;
	}
	playinit(flag);
}
arrs[0].addEventListener("click",pre);
//向右轮播
var next=function(){
	flag++;
	if(flag==Lis.length){
		flag=0;
	}
	playinit(flag);
}
arrs[1].addEventListener("click",next);
//自动轮播
var timer=setInterval(next,3000);

//鼠标悬停，停止自动轮播
box.addEventListener("mouseenter",function(){
	clearInterval(timer);
})
//鼠标移开，继上次位置自动轮播
box.addEventListener("mouseleave",function(){
	timer=setInterval(next,3000);
})
//小圆圈映射对应图片，实现点击圆即切图

