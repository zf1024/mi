//下一页
var arrs = document.querySelectorAll("nav a");
var Lis = document.querySelectorAll("ul li");
var circles = document.querySelectorAll("ol li");
var box = document.querySelector("#flash");
var flag = 0;
//手动向右轮播
var next = function() {
	Lis[flag].className = "";
	circles[flag].className = "";
	flag++;
	if(flag == Lis.length) {
		flag = 0;
	}
	Lis[flag].className = "now";
	circles[flag].className = "nowx";
}
arrs[1].addEventListener("click", next);
//手动向左轮播
var pre = function() {
	Lis[flag].className = "";
	circles[flag].className = "";
	flag--;
	if(flag < 0) {
		flag = Lis.length - 1;
	}
	Lis[flag].className = "now";
	circles[flag].className = "nowx";
}
arrs[0].addEventListener("click", pre);

//自动轮播
var autoplay = setInterval(next, 3000);

box.addEventListener("mouseenter", function() {
	clearInterval(autoplay);
})
box.addEventListener("mouseleave", function() {
	autoplay = setInterval(next, 3000);
})