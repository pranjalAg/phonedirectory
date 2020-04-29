$( document ).ready(function() {
	registerSW();
	$("#mNumber").CcPicker({"countryCode":"in"});
	var list = '<td style="text-align:center;" colspan="4">No record Found !!</td>';
	$('.NoRecordList').html(list);
	/* Function to open pop-up
	*/
	$(".addNewrecord").click(function() {
		$('#testmodal').modal('show');
	});
	/* Function to Submit Form and add record
	*/
	$(".confirm_appointment").submit(function( event ) {
		event.preventDefault();
		var record = $( this ).serializeArray();
		var code = record[record.length-1]['value'];
		record[record.length-2]['value'] = '+ '+code+' '+record[record.length-2]['value'];
		var count = parseInt($('input[name="recordcount"]').val())+1;
		$('input[name="recordcount"]').val(count);
		var list = '<tr id="Reco_'+count+'">';
		var list2 = '';
		$.each(record, function (index, value) {
			if (value.name != 'mNumber_phoneCode') {
				list2 = list2+'<td>'+value.value+'</td>';
			}
		});
		var list = list+list2 +'<td><button id='+count+' class="btn deleteRec btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td></tr>';
		$('.NoRecordList').remove();
		$('.RecordList').append(list);
		$('#testmodal').modal('hide');
	});
	/* Function to delete Record
	*/
	$(document).on("click", ".deleteRec", function(){
		var recid = $(this).attr('id');
		$('#Reco_'+recid).remove();
	});
	async function registerSW() {
	  if ('serviceWorker' in navigator) {
	    try {
	      await navigator.serviceWorker.register('./sw.js');
	    } catch (e) {
	      console.log(`SW registration failed`);
	    }
	  }
	}
});