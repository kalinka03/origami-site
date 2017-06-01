$(function(){
            $(".info3").datepicker($.datepicker.regional[ "ru" ]);
            $(".info4").datepicker($.datepicker.regional[ "ru" ]);
             $(".info10").datepicker($.datepicker.regional[ "ru" ]);
            $(".info9").datepicker($.datepicker.regional[ "ru" ]);
            $(".info-calendar1").datepicker($.datepicker.regional[ "ru" ]);
            $(".info-calendar2").datepicker($.datepicker.regional[ "ru" ]);
              $(".reservations-block-calendar1").datepicker($.datepicker.regional[ "ru" ]);
          

       $("#calendar").datepicker({
 monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],
 dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
 firstDay: 1,
});


$("a[href=#test]").click(function() {
            $(this).css(' background', 'url(../images/yelowband.png)');
        });

$("a[href=#test]").fancybox();

// $('.form-room3').select2();
$('.form-room-select').select2();
$('.form-room-select2').select2();
$('.form-room-select').select2({
placeholder: "Категория номера"
});
$('.form-room-select2').select2({
placeholder: "Количество гостей"
});
 

 $('.block-buttom').click(
      function () {
      	  if(!$('#button-botton').hasClass('open')){
      	  	 $('#button-botton').addClass('open');
      	  	 $('#button-botton').stop().animate({'left':0},600);
              $("input[id='leng']").val('');
      	  	  } else {
       $('#button-botton').removeClass('open').stop().animate({'left':'-1140px'},500);
  }
    });





// $('#scroll-3').click(function(){
        // скорость скролла
        // var speed = 1000;
        
        // место скролла
        // var top = $('#scroll-1-3').offset().top;
        
        // $('html, body').animate({scrollTop: top}, speed);
        
        // return false;
    // });



$('a[href^="#ex1"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
});

$('a[href^="#ex3"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
});

$('a[href^="#ex2"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
});

$('a[href^="#ex4"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
});

 });


function setdat(){
 var dt=new Date();
var month = dt.getMonth()+1;
if (month<10) month='0'+month;
var day = dt.getDate();
if (day<10) day='0'+day;
var year = dt.getFullYear();
document.getElementById("Data1").value = day+'.'+month+'.'+year;
document.getElementById("Data2").value = day+'.'+month+'.'+year;	
	document.getElementById("Data3").value = day+'.'+month+'.'+year;
  document.getElementById("Data4").value = day+'.'+month+'.'+year;
}
	window.onload = function () {
		CountBox();
		setdat()
	}

