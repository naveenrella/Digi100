
$(document).ready(function(){
	var counter=0;
	if($('#q2').val() !=""){
       var totalResources = parseInt($('#q2').val());
     }
	// var totalResources = parseInt($("#inputField-0").val());//10

 	$("#inputField-0").blur(function(){ 
 		var firstSetResources = parseInt(this.value);		//6
    createAtechnologyBox(counter,parseInt($('#q2').val()),firstSetResources);
	});
	
	function createAtechnologyBox(counter,totalResources,firstSetResources){
		if(totalResources - firstSetResources < 1){
			$("#inputField-"+counter).val(totalResources);
			return;
		}
		counter++;
    var clone = $("#technologyBox").clone();
    var technologyCloneId = "technologyClone-" + counter;
    var selectTagId = "selectBox-" + counter;
		var inputFieldId = "inputField-"+counter;
		var inputFieldValue = (parseInt(totalResources) - parseInt(firstSetResources));
		clone.find("#technologyBox").attr("id",technologyCloneId);
		clone.find("#selectBox-0").attr("id",selectTagId);		
		clone.find("#inputField-0").attr("id",inputFieldId);
		clone.find("#"+inputFieldId).val(inputFieldValue);
		//reset the totalResources
		totalResources = parseInt(totalResources)-parseInt(firstSetResources);
		$("#clonedBox").append(clone);
		clone.find("#"+inputFieldId).bind( "blur",function(){
			createAtechnologyBox(counter,totalResources,parseInt(this.value));
		}); 			
	}	
});


//get resource Details
$("#getResourceDetails").bind('click',function getResourceDetails(){
		var resourceCount = {},resourceTechnology={},resourceAllocation={};
		$('*[id*=inputField-]:visible').each(function() {
    	// console.log("id= "+this.id+" value = "+$(this).val() );
    	resourceCount[this.id]= $(this).val() ;
		});

		$('*[id*=selectBox-]:visible').each(function() {
    	// console.log("id= "+this.id+" value = "+$(this).val() );
    	resourceTechnology[this.id]= $(this).val() ;
		});

		for(var i=0;i<Object.keys(resourceCount).length;i++){
			resourceAllocation[resourceTechnology["selectBox-"+i]] =parseInt(resourceCount["inputField-"+i]);
		}

		console.log(JSON.stringify(resourceAllocation));

})//end of get resource details);
	