(function(){function g(){d=window.jQuery.noConflict(!0);h()}function h(){d(document).ready(function(c){c("<link>",{rel:"stylesheet",type:"text/css",href:"//"+f+"/api/widget.css"}).appendTo("head");c.getJSON("//"+f+"/api/widget.php?callback=?",function(b){c("#RS-widget").html(b.html);c("#RS-button").bind("click",k);c("#RS-number-start, #RS-number-end").keydown(function(a){var b=c(this),j=109==a.keyCode||189==a.keyCode?!0:!1;a=a.shiftKey?!1:j&&!b.val()?!0:47<a.keyCode&&58>a.keyCode||95<a.keyCode&&106>a.keyCode||111<a.keyCode&&124>a.keyCode||8==a.keyCode||46==a.keyCode||37==a.keyCode||39==a.keyCode&&!j?!0:!1;return a})})})}function k(){d(document).ready(function(c){var b=c("#RS-number-start").val(),a=c("#RS-number-end").val(),d=c("#RS-number");c.getJSON("//"+f+"/api/widget.php?getNum=?",{start:b,end:a},function(a){var b=String(a.num);b.split("");a='<span class="new">';for(var e=0;e<b.length;e++)a+="<span>"+b.charAt(e)+"</span>";a+="</span>";d.find(".new").attr("class","cur");d.append(a);d.find(".cur").fadeOut(100,function(){c(this).remove()});e=1;d.find(".new span").each(function(){c(this).delay(parseInt(150/b.length)*e++).animate({top:0},"fast")})})})}var f="randstuff.ru",d;if(void 0===window.jQuery||140>parseInt(window.jQuery.fn.jquery.split(".").join(""))){var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src","//ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js");b.onload=g;b.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&g()};(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(b)}else d=window.jQuery,h()})();