$(document).ready(function(){
// element selector
$("p").on("click",function(){

    console.log("you click",this);
    $(this).hide()
    
})
// id selector
$("#name").on("click",function(){
    console.log("name",this);
    
})

// class selector
$(".thing").on("click",function(){
    console.log("thing",this);
    
})
$(".one").on("click",function(){
    $(this).hide(1000)
    $(this).show(1000)

})

$("#btn").on("click",function(){
    $("#text").toggle(1000)
})

$("#slide").on("click",function(){ 
     $("#textslide").slideToggle(1000)
})


$("#fadeeee").on("click",function(){ 
    $("#fade").fadeToggle(1000)
})

$("#btn-on").on("click",function(){
    $(".on").fadeToggle(1000)
})










})