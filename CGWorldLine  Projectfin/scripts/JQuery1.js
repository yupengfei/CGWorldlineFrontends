$(function(){ 
    // 创建一个select标签 
   $("<select />").appendTo("nav"); 
 
   // 创建默认选项 "Go to..." 
   $("<option />", { 
      "selected": "selected", 
      "value"   : "", 
      "text"    : "Go to..." 
   }).appendTo("nav select"); 
 
   // 根据导航菜单中链接，获取下拉菜单选项，包括文本和链接 
   $("nav a").each(function() { 
       var el = $(this); 
       $("<option />", { 
           "value"   : el.attr("href"), 
           "text"    : el.text() 
       }).appendTo("nav select"); 
   }); 
   //当选中下拉框中的选项时实现跳转 
   $("nav select").change(function() { 
       window.location = $(this).find("option:selected").val(); 
   }); 
}); 