
$("ul").on("click" ,"li", function(){
	$(this).toggleClass("completed");
});
// on !!!!!!
$("ul").on("click","span",
           function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
    
  });
  event.stopPropagation();
});
// fadeOut / parent / stopPropagation!!!
$("input[type='text']").keypress(function(event){
  if(event.which===13){
    var todotext =$(this).val();
    $(this).val("");
    // this mean input, setter
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext +"</li>")
  }
 // .val!!! and enter =13 .which  
});
                                 

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});


 
$(document).ready(function(){
  $("#sortable").sortable();
    
 });
                  