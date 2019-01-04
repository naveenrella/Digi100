"use strict";



$(function() {
  var loggedUserName  = JSON.parse(localStorage.getItem('loggedUser'));
  $(".userName").html(loggedUserName.username);
  document.getElementById("loginDate").innerHTML = "Login date : " + new Date().toLocaleDateString();

  $('input.getName').keyup("keyup", function() {
    $('.cName').html($('.getName').val());
  });
  $('.help').popover();
  //$('.progress-bar').css("width", "20%");
  $('.submit').click(function() {
    event.preventDefault();
    var darken = '<div class="darken" style="display:none;"></div>';
    $('body').prepend(darken);

    $(".darken").delay().show(0).animate({
      opacity: 0.8
    }, "fast");
    $('.thanks').removeClass('hide').addClass('fadeInDownBig');
  });
  var img_cnt = $('li.activate').index() + 1;

  var img_amt = $('li.form-group').length;
  $('.img_cnt').html(img_cnt);
  $('.img_amt').html(img_amt);
  var progress = ($('.img_cnt').text() / $('.img_amt').text()) * 100;
  $('.progress-bar').css("width", progress + "%");
  $('.form-control').keyup(function() {
    $('.nxt').removeClass("hide fadeOutDown").addClass("fadeInUp");
  })

  //Initial technology checkbox 
 	$('.technologyClass').bind('change', function (v) {
      if($(this).is(':checked')) {
      	 setTimeout(function(){ $('.nxt').click(); }, 400);            
      }
  });
 	
  //default extra suggestions  for sub technology
  $('#q4').hide();
  $('.subTechnologyClass').bind('change', function (v) {
  // this will contain a reference to the checkbox   
    if($(this).is(':checked')) {
        // the checkbox is now checked
        $('#q4').show()
    } else {
      $('#q4').hide()
        // the checkbox is now no longer checked
    }
  });
  
  // toggle the side view

  $(".image--cover").click(function(){
    if($(".wrapper").css('display') == 'none'){
      $(".wrapper").css("display", "block");
    }else{
      $(".wrapper").css("display", "none");
    }
    
  })
     
  
  $('#q3').change(function(){ 
    $('.answer3').html("Technology = " + $('#q3').val() );
  });

  $('.nxt').click(function() {
    $('.nxt').removeClass("fadeInUp").addClass('fadeOutDown');
    $('.answer3').html("Technology = " + $('#q3').val() );
    $('.answer4').html("Front-End  = " +  $('#frontEnd').val() + ", Backend = " + $('#backEnd').val() + ", Testing = " + $("#testing").val());
    if ($('.progress-form li').hasClass('activate')) {

      $('p.alerted').removeClass('fadeInLeft').addClass('fadeOutUp');

      var $activate = $('li.activate');
      var $inactive = $('li.inactive');
      $activate.removeClass("fadeInRightBig activate").addClass('fadeOutLeftBig');
      $inactive.removeClass("hide inactive").addClass("activate fadeInRightBig").next().addClass('inactive');

      var img_cnt = $('li.activate').index() + 1;

      var img_amt = $('li.form-group').length;
      $('.img_cnt').html(img_cnt);
      $('.img_amt').html(img_amt);
      var progress = ($('.img_cnt').text() / $('.img_amt').text()) * 100;
      $('.progress-bar').css("width", progress + "%");

      if ($('.img_cnt').html() == $('.img_amt').html()) {

        $('.count, .nxt').hide();
        $('.submit').removeClass("hide");

      }

    } //End Else

  });

});

$(function() {

  $('#q1').keyup(function() {
    var nameValue = $(this).val();
    $('.answer1').html(" Project Name =  "+ nameValue);
  });

  $('#q2').keyup(function() {
    var nameValue = $(this).val();
    $('.answer2').html("Number of resources required = "+ nameValue);
  });

  
  $("#finalSubmit").click(function(){
    setTimeout(function(){ 
       location.replace("../templates/profiles.html")
    }, 3000);
  });

});