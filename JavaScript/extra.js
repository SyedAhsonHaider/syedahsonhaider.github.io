$(".nav").animate({opacity: '0'});
$(".ap1").hide();
$(".cards").hide()
$(document).bind('mousewheel', function(e) {
    $(".ap1").show();
    $(".contacts").animate({opacity: '0'}, 0);
    $("#iName").animate({fontSize: "24px"}, 350)
    $("#name").animate({left: '15%', top: '10%'}, 350);
    $('.cards').animate({opacity: '0'}, 1)
    $(".nav").animate({opacity: '1'});
});
$("#letstalk").click(function(){
    $(".ap1 h1").animate({left: '50%'}, 350);
    $('.ap1 h1 ').attr('style','transform: translateX(-50%)');
    $(".ap1 h1").animate({left: '50%'}, 1);
    $(".ap1 #profile").animate({opacity: '0'}, 150);
    $(".ap1 #pa").animate({left: '50%', width: '80%'}, 550);
    $(".ap1 h1").html('More about me!');
    $(".cards").show()
    $('.cards').animate({opacity: '1'}, 1550)
    $(".ap1 #pa").html("As a young boy from a middle-class family in India, I've always had a thirst for knowledge and a passion for coding. Coding has become my creative outlet and a means to express myself. Over the years, I have dedicated myself to mastering various programming languages, such as JavaScript, CSS, HTML, and Python. These languages have given me the power to bring ideas to life and solve complex problems through innovative solutions.");
}); 
$("#whyme").click(function(){
    $('.cards').animate({opacity: '0'}, 1)
    $(".ap1 #profile").animate({opacity: '0'}, 150);
    $(".ap1 h1").animate({left: '14%'}, 350);
    $('.ap1 h1 ').removeAttr('style','transform: translateX(-50%)')
    $(".ap1 #pa").animate({left: '35%', width: '42%'}, 550);
    $(".ap1 #profile").animate({opacity: '1'}, 550);
    $(".ap1 h1").html('Hiya!, Viewer.')
    $(".cards").hide()
    $(".ap1 #pa").html("It is my pleasure to introduce myself as Syed Ahson Haider, a young boy hailing from a middle-class Indian family. Although my age is not disclosed, I have developed a strong interest in coding and gained proficiency in a variety of programming languages, including JavaScript, CSS, HTML, and Python. With solid 3-4 years' experience in coding and computers under my belt, I aspire to build my own company in the future. I also want to pursue a engineering career. ")

});
