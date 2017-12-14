//下一页
var arrs = document.querySelectorAll("nav a");
var Lis = document.querySelectorAll("ul li");
var circles = document.querySelectorAll("ol li");
var box = document.querySelector("#flash");
var flag = 0;
console.log(Lis.prototype);
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
arrs[0].addEventListener("click", function() {
	Lis[flag].className = "";
	circles[flag].className = "";
	flag--;
	if(flag < 0) {
		flag = Lis.length - 1;
	}
	Lis[flag].className = "now";
	circles[flag].className = "nowx";
})

//点击圆圈轮播
for (var i=0;i<circles.length;i++) {
	var that=this;
	circles[i].addEventListener("click",function(){
		that.className="now";
	})
}

//自动轮播
var autoplay = setInterval(next, 3000);

box.addEventListener("mouseenter", function() {
	clearInterval(autoplay);
})
box.addEventListener("mouseleave", function() {
	autoplay = setInterval(next, 3000);
})