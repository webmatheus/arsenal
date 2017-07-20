$(document).ready(function() {
    //Finish DOM load, jQuery code goes here
});

//Get value input
$('#id').val();

//Set value input
$('#id').val('value');

//---------------------------------------

//Redirect
window.location.href = 'some/address.php';

//Get attr value
$('#id').attr('attr');

//Set attr value
$('#id').attr('attr', 'value');

//Set Timeout and Run a action
setTimeout(function() { $('#id').remove() }, 1500);

//Hide slowly (Not delete)
$('#id').hide();

//Show slowly
$('#id').show();

//Submit post form no-refresh + callback
$('#form-id').submit(function(){		
	var dados = $(this).serialize();
	$.ajax({
		url: 'address/action.php',
		cache: false,
		data: dados,
		type: "POST",

		//Callback server-side
		success: function(msg){
					//Verify success response
					if (msg.indexOf('response') != -1){
						//Do something
					}
		}
	})
	return false
});
