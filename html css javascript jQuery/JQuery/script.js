$(document).ready(function () {
    // jQuery methods go here...
//   $("p").click(function(){              //p selector
//     $(this).hide(); 
//   });
//      $("button").click(function(){    
//     $("#t").hide();             // id selector
//   });  
//     $("button").click(function(){
//         $(".test").hide();   //class selector
//      $("*").hide(); //select all    
//   });
//     $("button").click(function(){
//         $("[href]").hide(); //all href elements
//          $(":button").hide(); //all button elemts
//   });
//      $("button").dblclick(function(){
//     $(".h").hide();                 //double click event
//   });
//       $("#p1").mouseenter(function(){
//     alert("You entered p1!");           //mouse entered
//   });
//      $("#p2").mouseleave(function(){
//     alert("Bye! You now leave p1!");        //mouse leave
//   });
//     $("#hide").click(function(){
//     $("p").hide();
//   });                                // hide show
//   $("#show").click(function(){
//     $("p").show();
//   });
//  $("button").click(function(){
//     $("#div1").fadeIn();
//     $("#div2").fadeIn("slow");      //fade in
//     $("#div3").fadeIn(3000);
//   });
    // $("button").click(function(){
    // $("#div4").fadeOut("slow");
    // $("#div5").fadeOut("slow");         //fade out
    // $("#div6").fadeOut(3000);
    // });
    //  $("button").click(function(){
    // $("div").animate({left: '250px'});        //animation
    //  });
    $("button").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");  //animate
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});