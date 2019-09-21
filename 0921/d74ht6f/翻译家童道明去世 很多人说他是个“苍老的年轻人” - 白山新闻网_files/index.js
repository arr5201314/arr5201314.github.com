

// JavaScript Document
//顶部导航
var menu;
var $=jQuery;
$("#topnav li").hover(function() {
$(this).addClass("active");
menu = $(this).find(".downMenu");
function sDown() {
if (!menu.is(":animated")) {
menu.slideDown(0);
}
}
sDown();
},
function() {
$(this).removeClass("active");
menu = $(this).find(".downMenu");
function sUp() {
menu.slideUp(0);
}
sUp();
});
//搜索
var val1 = $("#search").find(".val1");
var txt = $("#search").find("#text");
var sMenu = $("#search").find("#selectMenu");
var buttonVal = $("#search").find(".buttonVal");
var textCon = $("#selectMenu a");
sMenu.hover(function() {
$(this).css("display", "block")
},
function() {
$(this).css("display", "none")
});
val1.click(function() {
if($(this).find(".selectMenu").css("display")=="none"){
$(this).find(".selectMenu").css("display", "block");}
else{
$(this).find(".selectMenu").css("display", "none");}
});
textCon.click(function() {
txt.html($(this).html());
});
buttonVal.hover(function() {
$(this).addClass("buttonVal_hover")
},
function() {
$(this).removeClass("buttonVal_hover")
});
//搜索框点击效果
/*var val2 = $("#search .val2 input").eq(0);
val2.focus(function() {
$(this).val("");
});
val2.blur(function() {
$(this).val(this.defaultValue);
});*/
//搜索下拉菜单 
/*var slideDown = $("#search").find(".slideDown");
slideDown.hover(function() {
$(this).addClass("slideCur");
$(this).find(".selectBox").slideDown(0);
},
function() {
$(this).removeClass("slideCur");
$(this).find(".selectBox").slideUp(0);
})*/
//品牌滚动 
$("#lr").click(function()
{
$("#tp2:not(:animated)").animate({left:-1015+"px"},
function(){
$(".brand-show-w ul").find('li').eq(0).appendTo($(".brand-show-w ul"));
$(".brand-show-w ul").css({'left':0})
});
});

$("#lt").click(function()
{

$(".brand-show-w ul").find('li:last').prependTo($(".brand-show-w ul"));
$(".brand-show-w ul").css({left:-1015});
$("#tp2").stop().animate({left:0});
});
$("#brand_show").mouseenter(function()
{
$(this).find("#lr").css({"display":"block"});
$(this).find("#lt").css({"display":"block"});
});
$("#brand_show").mouseleave(function()
{
$(this).find("#lr").css({"display":"none"});
$(this).find("#lt").css({"display":"none"});
});
/*取子集*/
/*function getSon(obj) {
var arr = [];
var son = obj.childNodes,
len = son.length;
for (var i = 0; i < len; i++) {
if (son[i].nodeType == 1) {
arr.push(son[i]);
}
}
return arr;
}
//品牌滚动END
mixScroll("brand_show");*/
/*新闻滚动*/
function scrollId(elementId) {
var scrollbox = $("#" + elementId);
var timer;
scrollbox.hover(function() {
clearInterval(timer);
},
function() {
timer = setInterval(function() {
scrollText(scrollbox);
},
3000);
}).trigger("mouseleave");
function scrollText(obj) {
var self = obj.find("ul:first");
var lineHeight = self.find("li:first").height();
self.animate({
"top": -lineHeight + "px"
},
600,
function() {
self.css({
top: 0
}).find("li:first").appendTo(self)
})
}
}
//scrollId("scroll01");

for (var i=0; i<numArr_news.length; i++) { 
html_news.push('<li><div class="image"><a href="'+numArr_news[i].href+'" target="_blank"><img src="'+numArr_news[i].img+'"  lang = "'+numArr_news[i].img+'" width="196" height="110" /></a><span class="plus"></span></div><div class="text"><a href="'+numArr_news[i].href+'" target="_blank">'+numArr_news[i].img_title+'</a></div></li>');
}
for (var i=0; i<numArr_img.length; i++) { 
html_img.push('<li><div class="image"><a href="'+numArr_img[i].href+'" target="_blank"><img src="'+numArr_img[i].img+'"  lang = "'+numArr_img[i].img+'" width="196" height="110" /></a></div><div class="text"><a href="'+numArr_img[i].href+'" target="_blank">'+numArr_img[i].img_title+'</a></div></li>');
}
for (var i=0; i<numArr_guess.length; i++) { 
html_guess.push('<li><div class="image"><a href="'+numArr_guess[i].href+'" target="_blank"><img src="'+numArr_guess[i].img+'"  lang = "'+numArr_guess[i].img+'" width="196" height="110" /></a></div><div class="text"><a href="'+numArr_guess[i].href+'" target="_blank">'+numArr_guess[i].img_title+'</a></div></li>');
}
document.getElementById("html_news").innerHTML = html_news.join("");
document.getElementById("html_img").innerHTML = html_img.join("");
document.getElementById("html_guess").innerHTML = html_guess.join("");
$("#html_guess li:last-child").css("marginRight","0");
$("#scrollbox07 .scrollMid li:last-child").css("marginRight","0");
//切换[图表]
function chboxTab(obj) {
var chboxId = $("#" + obj);
var chboxTag = chboxId.find(".change li");
var chboxBlock = chboxId.find(".chblock");
var num = 0;
chboxTag.mouseover(function() {
num = $(this).index();
$(this).addClass("active").siblings("li").removeClass("active");
chboxBlock.eq(num).show(0).siblings(".chblock").hide(0);
});
}
//切换[图表]
function chboxTab_new(obj,ind) {
var chboxId = $("#" + obj);
var chboxTag = chboxId.find(".change li");
var chboxBlock = chboxId.find(".chblock");	
var num = 0;
chboxTag.mouseover(function() {
num = $(this).index();
$(this).addClass("active").siblings("li").removeClass("active");
chboxBlock.eq(num).show(0).siblings(".chblock").hide(0);
var list=chboxBlock.eq(num).find(".mlist li");
for(var i = 0;i<ind;i++){	
if(list.eq(i).find("img").attr("src")!=list.eq(i).find("img").attr("lang")){
list.eq(i).find("img").attr("src",list.eq(i).find("img").attr("lang"))
}
}
});
}
//切换[图表]
function chboxTab_tv(obj) {
var cctv_arr = [];
var chboxId = $("#" + obj);
var chboxTag = chboxId.find(".change li");
var chboxBlock = chboxId.find(".chblock");
var num = 0;
var id_tv = chboxBlock.eq(0).attr("lang");
chboxTag.click(function() {
num = $(this).index();

})};
chboxTab("chbox01");
chboxTab("chbox02");
chboxTab_new("chbox03",5);
chboxTab_new("chbox04",5);
chboxTab_tv("chbox05");
//多屏滚动
function move(obj,scw,ind) {
var oElm = $("#" + obj);
var oParent=oElm.parent();
var btnl = oElm.find(".btn_left");
var btnr = oElm.find(".btn_right");
var btnlplus = oElm.find(".btn_left_plus");
var btnrplus = oElm.find(".btn_right_plus");
var ulList = oElm.find(".mlist");
var liCur=oElm.find(".mlist .cur");
var list=oElm.find(".mlist li");
var pageNum=oElm.find(".page");
var countNum=oElm.find(".count");
var len = oElm.find(".mlist li").length;
var liMar=oElm.find(".mlist li").css("marginRight");
var mid=oElm.find(".scrollMid")
var liw=oElm.find(".mlist li").width();
var t=Math.floor(liw*len/scw);
ulList.width((parseInt(liMar)+liw)*len);
countNum.html(t+1);
var count = 0;
for(var i = 0;i<ind;i++){
if(list.eq(i).find("img").attr("src")!=list.eq(i).find("img").attr("lang")){
list.eq(i).find("img").attr("src",list.eq(i).find("img").attr("lang"))
}
}
//鼠标进入区域让左右翻页箭头显示出来
mid.hover(function(){
btnlplus.css("display","block");
btnrplus.css("display","block");
},
function(){
btnlplus.css("display","none");
btnrplus.css("display","none");
});
btnlplus.hover(function(){
btnlplus.css("display","block");
btnrplus.css("display","block");
},
function(){});
btnrplus.hover(function(){
btnlplus.css("display","block");
btnrplus.css("display","block");
},
function(){});
//鼠标划过每个图片背景变色
list.hover(function(){
$(this).addClass("cur").siblings("li").removeClass("cur");
},
function(){
$(this).removeClass("cur");
}
);
function scrollLeft() {
if (!ulList.is(":animated")) {
ulList.animate({
"left": "-=" + scw + "px"
},
1000);
count++;
for(var i = ind*count;i<ind*count+ind;i++){
if(list.eq(i).find("img").attr("src")!=list.eq(i).find("img").attr("lang")){
list.eq(i).find("img").attr("src",list.eq(i).find("img").attr("lang"))
}	
}
pageNum.html(count+1);
}
}
function scrollRight() {
if (!ulList.is(":animated")) {
ulList.animate({
"left": "+=" + scw + "px"
},
1000);
count--;
pageNum.html(count+1);
}
}
btnr.click(function() {
if (count == t) {
return false;
}
else{
scrollLeft();
}
});
btnl.click(function() {
if (count == 0) {
return false;
}
else{
scrollRight();
}
});	
}
function move_new(obj,scw,ind) {
var oElm = $("#" + obj);
var oParent=oElm.parent();
var btnl = oElm.find(".btn_left");
var btnr = oElm.find(".btn_right");
var btnlplus = oElm.find(".btn_left_plus");
var btnrplus = oElm.find(".btn_right_plus");
var ulList = oElm.find(".mlist");
var liCur=oElm.find(".mlist .cur");
var list=oElm.find(".mlist li");
var pageNum=oElm.find(".page");
var countNum=oElm.find(".count");
var len = oElm.find(".mlist li").length;
var liMar=oElm.find(".mlist li").css("marginRight");
var mid=oElm.find(".scrollMid")
var liw=oElm.find(".mlist li").width();
var t=Math.floor(liw*len/scw);
ulList.width((parseInt(liMar)+liw)*len);
countNum.html(t+1);
var count = 0;
if(oElm.parent(".chblock").css("display")=="block"){
for(var i = 0;i<ind;i++){
if(list.eq(i).find("img").attr("src")!=list.eq(i).find("img").attr("lang")){
list.eq(i).find("img").attr("src",list.eq(i).find("img").attr("lang"))
}
}
}	
//鼠标进入区域让左右翻页箭头显示出来
mid.hover(function(){
btnlplus.css("display","block");
btnrplus.css("display","block");
},
function(){
btnlplus.css("display","none");
btnrplus.css("display","none");
});
btnlplus.hover(function(){
btnlplus.css("display","block");
btnrplus.css("display","block");
},
function(){});
btnrplus.hover(function(){
btnlplus.css("display","block");
btnrplus.css("display","block");
},
function(){});
//鼠标划过每个图片背景变色
list.hover(function(){
$(this).addClass("cur").siblings("li").removeClass("cur");
},
function(){
$(this).removeClass("cur");
}
);
function scrollLeft(ind) {
if (!ulList.is(":animated")) {
ulList.animate({
"left": "-=" + scw + "px"
},
1000);
count++;
for(var i = ind*count;i<ind*count+ind;i++){
if(list.eq(i).find("img").attr("src")!=list.eq(i).find("img").attr("lang")){
list.eq(i).find("img").attr("src",list.eq(i).find("img").attr("lang"))
}				
}
pageNum.html(count+1);
}
}
function scrollRight() {
if (!ulList.is(":animated")) {
ulList.animate({
"left": "+=" + scw + "px"
},
1000);
count--;
pageNum.html(count+1);
}
}
btnr.click(function() {
if (count == t) {
return false;
}
else{
scrollLeft(ind);
}
});
btnl.click(function() {
if (count == 0) {
return false;
}
else{
scrollRight();
}
});	
}
move_new("scrollbox01",1005,5);
move_new("scrollbox02",1005,5);
move_new("scrollbox03",1005,5);
//move_new("scrollbox04",1005,5);
//move("scrollbox05",1005,5);
//move("scrollbox06",690,3);
//move("scrollbox07",1005,5);
$("#scrollbox04 .mlist li").hover(function(){
$(this).addClass("cur").siblings("li").removeClass("cur");
},
function(){
$(this).removeClass("cur");
});
$("#scrollbox07 .mlist li").hover(function(){
$(this).addClass("cur").siblings("li").removeClass("cur");
},
function(){
$(this).removeClass("cur");
});
/*首页轮播*/
var div1=$(".li_1");
var div2=$(".li_2");
var obj = $(".ul_main");
var scrollobj =$(".ul_1");
var allwidth = div1.width()*2;
scrollobj.css("width",allwidth);
div2.html(div1.html());
div1.find(".pic").eq(0).addClass("cur");
var bigimgobj = $(".pics_show .qh");
var pic_length = div1.find(".pic").length;
var maxpage = parseInt(   pic_length/5)*2-1;
var maxleft =-(parseInt(pic_length/5)-1)*615+"px";
var maxright = -(parseInt(pic_length/5))*615+"px"
var cur_index=0;
var cur_page=0;
function setBigImg(index){
bigimgobj.find("a").attr("href",$(".ul_1 li").eq(0).find(".pic").eq(index).find("a").attr("href"));
bigimgobj.find("img").attr("src",$(".ul_1 li").eq(0).find(".pic").eq(index).find(".by_nr_1").attr("bigimg"));
bigimgobj.find("span a").html($(".ul_1 li").eq(0).find(".pic").eq(index).find(".by_nr_1").attr("bigtitle"));
div1.find(".pic").eq(index).addClass("cur").siblings().removeClass("cur");
div2.find(".pic").eq(index).addClass("cur").siblings().removeClass("cur");

}
setBigImg(cur_index);
function nextImg(){
cur_index++;
if(cur_index>(pic_length-1)){
cur_index=0;
}
setBigImg(cur_index);
if(cur_index%5==0){
MarqueeLeft();
}
}
function preImg(){
cur_index--;
if(cur_index<0){
cur_index=pic_length-1;
}
setBigImg(cur_index);
if(cur_index%5==0){
MarqueeRight();
}
}		
function MarqueeLeft(){
cur_page++;
if(cur_page>maxpage){
cur_page=maxpage;
}
var left= -615*cur_page;
left+="px";

if(cur_page==maxpage){
scrollobj.animate({"marginLeft":left},600,function(){
scrollobj.css("marginLeft",maxleft);
cur_page= parseInt(pic_length/5)-1;
});
}
else{
scrollobj.animate({"marginLeft":left},600)
}
}
function MarqueeRight(){
cur_page--;
if(cur_page<0){
cur_page=0;
}
var left= -615*cur_page;
left+="px";
if(cur_page==0){
scrollobj.animate({"marginLeft":left},600,function(){
scrollobj.css("marginLeft",maxright);
cur_page=maxpage-1;
})
}
else{
scrollobj.animate({"marginLeft":left},600)
}
}
$(".pics_show .ul_1 li div.pic").live("mouseover",function(){
clearInterval(myfisttimer);
var index = $(this).index();
cur_index=index;
setBigImg(cur_index);
})
$(".ul_1").live("mouseleave",function(){
myfisttimer = setInterval(nextImg,5000);
})	
var myfisttimer = setInterval(nextImg,5000);

var m_ul =".scorebox .score .scoreBar .mid .list";
var m_li=".scorebox .score .scoreBar .mid .list li";
var but_bot=".scorebox .score .scoreBar .btndown";
var but_top=".scorebox .score .scoreBar .btnup";
var m_li_size=$(m_li).size();
$(but_bot).click(function(){
ul_top=$(m_ul).css("top");
ul_top=ul_top.replace(/px/,"");
li_h=$(m_li).css("height");
li_h=li_h.replace(/px/,"");
u2_top=ul_top-(parseInt(li_h)+5);
ul_h=$(m_ul).css("height");
ul_h=ul_h.replace(/px/,"");
$(m_li).each(function(a){					
if($(this).attr("class")=="cur"){
if(a<(m_li_size-1)){
b=a+1;	
}
if(u2_top<=-(ul_h-160)){
return false;
}
$(".scorebox .score .scoreBar .mid .list:not(:animated)").animate({"top":u2_top+"px"},function(){
});	
return false;
}	
});
$(this).blur();
return false;			
});
$(but_top).click(function(){
ul_top=$(m_ul).css("top");
ul_top=ul_top.replace(/px/,"");
li_h=$(m_li).css("height");
if(ul_top==0){
return false;		
}
li_h=li_h.replace(/px/,"");	
u2_top=parseInt(ul_top)+(parseInt(li_h)+5);
$(m_li).each(function(a){					
if($(this).attr("class")=="cur"){
b=a-1;	
$(".scorebox .score .scoreBar .mid .list:not(:animated)").animate({"top":u2_top+"px"},function(){
});	
return false;
}
});
$(this).blur();
return false;
});
$(m_li).click(function(){		   
ul_top=$(m_ul).css("top");
ul_top=ul_top.replace(/px/,"");
li_h=$(m_li).css("height");
li_h=li_h.replace(/px/,"");	
$(this).attr("id","");
$(m_li).attr("class","");					   
$(this).attr("class","cur");
$(m_li).each(function(a){						
if($(this).attr("class")=="cur"){
if(a<=4){
$(".scorebox .score .scoreBar .mid .list:not(:animated)").animate({"top":0+"px"});
}
if(a>=(m_li_size-5)){
$(".scorebox .score .scoreBar .mid .list:not(:animated)").animate({"top":-((m_li_size-5)*(parseInt(li_h)+5))+"px"});
}
u2_top=a*(parseInt(li_h)+5);	
$(".scorebox .score .scoreBar .mid .list:not(:animated)").animate({"top":-u2_top+"px"});
}
});
bfp_l_r();	  
});
$(".scorebox .score .scoreNote .scoreBlock ul li").mouseenter(function(){
$(".scorebox .score .scoreNote .scoreBlock ul li").attr("class","");
$(this).attr("class","active");
});
$(".scorebox .score .scoreNote .scoreBlock ul li").mouseleave(function(){
$(".scorebox .score .scoreNote .scoreBlock ul li").attr("class","");
});
$(".scorebox .score .scoreBar .mid .list li").mouseenter(function(){
/*if($(this).attr("class")=="cur"){
return false;
}else{
}*/
$(this).addClass("img_cur");
});
$(".scorebox .score .scoreBar .mid .list li").mouseleave(function(){
$(this).removeClass("img_cur");										
});
$(".scorebox .score .scoreNote .scoreBlock .noteList li .sl").mouseenter(function(){
$(this).find("img").hide();
$(this).find("table").show();
});
$(".scorebox .score .scoreNote .scoreBlock .noteList li .sl").mouseleave(function(){
$(this).find("img").show();
$(this).find("table").hide();												  
});
function bfp_l_r(){
var time_tt=350;
$(".scorebox .score .scoreNote .scoreBlock").each(function(c){
if($(this).css("display")=="block"){
ul_main_ul_size=$(".scorebox .score .scoreNote .scoreBlock .noteList").eq(c).find("li").size();
ul_main_ul_height=ul_main_ul_size*66;
$(".scorebox .score .scoreNote .scoreBlock").eq(c).find(".noteList").css("height",ul_main_ul_height);	
//right=top
$(".scorebox .score .scoreNote .scoreBlock .right_but1").click(function(){																																				
ul_main_top=$(".scorebox .score .scoreNote .scoreBlock .noteList").css("top");	
ul_main_top1=ul_main_top.replace(/px/,"");			
ul_main_top=ul_main_top1-66;		
ul_main_ul_height=$(".scorebox .score .scoreNote .scoreBlock .noteList").css("height");	
ul_main_ul_height=ul_main_ul_height.replace(/px/,"");	
ul_main_top1=ul_main_top1.replace(/-/,"");																	
if(ul_main_top1>=(ul_main_ul_height-198)){
return false;
}else{
$(".scorebox .score .scoreNote .scoreBlock .noteList:not(:animated)").animate({"top":ul_main_top+"px"},time_tt);	
return false;
}
return false;								
});
$(".scorebox .score .scoreNote .scoreBlock .left_but1").click(function(){																																	
ul_main_top=$(".scorebox .score .scoreNote .scoreBlock .noteList").css("top");		
ul_main_top1=ul_main_top.replace(/px/,"");
ul_main_top=parseInt(ul_main_top1)+66;									
if(ul_main_top1>=0){
return false;
}else{
$(".scorebox .score .scoreNote .scoreBlock .noteList:not(:animated)").animate({"top":ul_main_top+"px"},time_tt);				
return false;		
}																																		
});
return false;
}		
});
}	
bfp_l_r();	
//回到首页顶部
function sideBacktop(){
var bro=$.browser;
var binfo="";
//var t = document.documentElement.scrollTop || document.body.scrollTop;
var t = $(window).scrollTop();
var w = $(window).width();
var ww = $(window).width();
var w_r = $(".ycc2").width();
var h = $(window).height();
var hh = $(window).height();
var h_r = $(".ycc2").height();
h=parseInt(t)+parseInt(h-h_r-10);
w=w-w_r-10;
if(t>0){
$("#nav .up").css({"box-shadow":"4px 4px 4px 0 rgba(0, 0, 0, 0.2)"});
}else if(t==0){
$("#nav .up").css({"box-shadow":"0 0 0 0 rgba(0, 0, 0, 0)"});
}
if(t<1)
{
$(".ycc2").css({"display":"none"});
} else {
if(ww<1200)
{
$(".ycc2").css({"display":"none"});
} else {
if(hh<300)
{
$(".ycc2").css({"display":"none"});
} else {
$(".ycc2").css({"display":"block"});
if(bro.msie && bro.version=="6.0") 
{
$(".ycc2").css({"top":h});
}
}
}		
}
}
sideBacktop();
var throldHold = 300;
window.onresize = window.onscroll = function () {
clearTimeout(throldHold);
window.timer = setTimeout(sideBacktop, throldHold);
} 
//鼠标划过变换播放标
$(function(){
var proImage=$(".proList").find(".image");  
proImage.hover(function(){
$(this).addClass("imgCur");
},function(){
$(this).removeClass("imgCur");
});
var videoImage=$(".video_list_box").find(".image");
videoImage.hover(function(){
$(this).addClass("imgCur");
},function(){
$(this).removeClass("imgCur");
});
var imgBox=$(".imageBox").find(".image");
imgBox.hover(function(){
$(this).addClass("imgCur");
},function(){
$(this).removeClass("imgCur");
});
});
$(".mod07 ul li").hover(function(){
$(this).addClass("hover")
},function(){
$(this).removeClass("hover")
});

/*0422图片切换*/
function funRoll(div){
	var obj=$("#"+div),
		box=obj.find(".box"),
		lis=box.find("li"),
		len=lis.length-1;
	var str="",curr=0;
	var timer=null;
	function funPlay(){
		timer=setInterval(funGo,3000);
	}
	function funPause(){
		clearInterval(timer);
	}
	function funGo(){
		funShow(curr);
		curr=funNext(curr);
	}
	function funPrev(curr_){
		var index=curr_;
		index-=1;
		if(index<0) index=len;
		return index;
	}
	function funNext(curr_){
		var index=curr_;
		index+=1;
		if(index>len) index=0;
		return index;
	}
	function funShow(curr_){
		for(var i=0;i<=len;i++){
			if(i==curr_) continue;
			$(lis[i]).fadeOut("fast");
			$(lis[i]).css("display","none");
		}
		var realsrc=$(lis[curr_]).find("img").attr("data");
		$(lis[curr_]).find("img").attr("src",realsrc);
		$(lis[curr_]).fadeIn("fast");
		$(lis[curr_]).css("display","block");
	}
	this.inits=function(){
		if(len==0){
			var realsrc=$(lis[0]).find("img").attr("data");
			$(lis[0]).find("img").attr("src",realsrc);
			$(lis[0]).css("display","block");
			return;
		}
		funShow(curr);
		curr=funNext(curr);
		funPlay();
		obj.hover(function(){funPause();},function(){funPlay();});
	}
}
(new funRoll("imgroll")).inits();