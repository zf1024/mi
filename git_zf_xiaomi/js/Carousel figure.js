//下一页
var arrs = document.querySelectorAll("nav a");
var Lis = document.querySelectorAll("ul li");
var flag = 0;
//手动向右轮播
arrs[1].addEventListener("click", function() {
	flag++;
	if(flag == Lis.length) {
		flag = 0;
		for(var i = 0; i < Lis.length; i++) {
			Lis[i].className = "";
		}
	}
	Lis[flag].className = "now";
})
//手动向左轮播
arrs[0].addEventListener("click", function() {
	flag--;
	if(flag < 0) {
		flag = Lis.length - 1;
		for(var i = 0; i < Lis.length; i++) {
			Lis[i].className = "";
		}
	}
	Lis[flag].className = "now";
})
//遍历所有图片