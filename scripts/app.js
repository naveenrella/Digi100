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
     
  
  $('#selectBox-0').change(function(){ 
    $('.answer3').html("Technology = " + $('#selectBox-0').val() );
  });

  $('.nxt').click(function() {
     $('.nxt').removeClass("fadeInUp").addClass('fadeOutDown');
     $('.answer3').html("Technology = " + $('#selectBox-0').val() );
     $('.answer4').html("Front-End  = " +  $('#frontEnd').val() + ", Backend = " + $('#backEnd').val() + ", Testing = " + $("#testing").val());
     $("#inputField-0").val($('#q2').val());
     if($('#q2').val() !=""){
       var totalResources = parseInt($('#q2').val());
     }
     
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

      // var counter=0;
      // $("#inputField-0").blur(function(){ 
      //   var firstSetResources = parseInt(this.value);   //6
      //   createAtechnologyBox(counter,totalResources,firstSetResources);
      // });
      
      // function createAtechnologyBox(counter,totalResources,firstSetResources){
      //   if(totalResources - firstSetResources < 1){
      //     $("#inputField-"+counter).val(totalResources);
      //     return;
      //   }
      //   counter++;
      //   var clone = $("#technologyBox").clone();
      //   var technologyCloneId = "technologyClone-" + counter;
      //   var selectTagId = "selectBox-" + counter;
      //   var inputFieldId = "inputField-"+counter;
      //   var inputFieldValue = (parseInt(totalResources) - parseInt(firstSetResources));
      //   clone.find("#technologyBox").attr("id",technologyCloneId);
      //   clone.find("#selectBox-0").attr("id",selectTagId);    
      //   clone.find("#inputField-0").attr("id",inputFieldId);
      //   clone.find("#"+inputFieldId).val(inputFieldValue);
      //   //reset the totalResources
      //   totalResources = parseInt(totalResources)-parseInt(firstSetResources);
      //   $("#clonedBox").append(clone);
      //   clone.find("#"+inputFieldId).bind( "blur",function(){
      //     createAtechnologyBox(counter,totalResources,parseInt(this.value));
      //   }); 
      // } 

    } //End Else

  });

  // $(document).ready(function(){

    
  });

// });

$(function() {

  $('#q1').keyup(function() {
    var nameValue = $(this).val();
    $('.answer1').html(" Project Name =  "+ nameValue);
  });

  $('#q2').keyup(function() {
    $('#technology').val($(this).val()) ;
    var nameValue = $(this).val();
    $('.answer2').html("Number of resources required = "+ nameValue);
  });
  
  $("#finalSubmit").click(function(){
    setTimeout(function(){ 
       location.replace("../templates/profiles.html")
    }, 3000);
  });

});