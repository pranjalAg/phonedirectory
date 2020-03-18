$( document ).ready(function() {
	var list = '<td style="text-align:center;" colspan="4">No record Found !!</td>'
	$('.NoRecordList').html(list);
	$( ".addNewrecord" ).click(function() {
		$('#testmodal').modal('show');
		// $("#dataenter").css("display","inline-block");
		// $("#dataenter").slideToggle(); 
	});
	$( ".confirm_appointment" ).submit(function( event ) {
			  event.preventDefault();
			  var record = $( this ).serializeArray();
			  var list = '<tr id="Reco_">';
			  var list2 = '';
			   $.each(record, function (index, value) {
			   		list2 = list2+'<td>'+value.value+'</td>';

			    });
			   var list = list+list2 +'<td><button class="btn-danger">Delete</button></td></tr>';
			   $('.NoRecordList').remove();
			   $('.RecordList').append(list);
			   	$('#testmodal').modal('hide');


	});
 //    function displayform() {
 //          document.getElementById("dataenter").style.display = "inline-block"; 
 //          document.getElementById("tableview").style.display = "none";    
	// };

	// function displaytable() {
	//           document.getElementById("tableview").style.display = "inline-block";
	//           document.getElementById("dataenter").style.display = "none";     
	// }
});