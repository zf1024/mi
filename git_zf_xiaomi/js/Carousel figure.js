//下一页
var arrs = document.querySelectorAll("nav a");
var Lis = document.querySelectorAll("ul li");
var circles = document.querySelectorAll("ol li");
var flag = 0;
//手动向右轮播
arrs[1].addEventListener("click", function() {
	Lis[flag].className = "";
	flag++;
	if(flag == Lis.length) {
		flag = 0;
	}
	Lis[flag].className = "now";
})
//手动向左轮播
arrs[0].addEventListener("click", function() {
	Lis[flag].className = "";
	flag--;
	if(flag < 0) {
		flag = Lis.length - 1;
	}
	Lis[flag].className = "now";
})
//点击圆圈轮播
