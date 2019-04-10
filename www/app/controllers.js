var baseURL = 'http://localhost:8100/'

function AuthorsController(type,params){
	switch(type) {
		case 'list':
			$.get(baseURL+'authors/list',function(res){
				$.each(res,function(i,data){
					let html = '<tr>'+
								'<td>'+data.nama+'</td>'+
							   '</tr>';
					$('#list_data').append(html);
				})
			});
		break;
		case 'add':
			$('input').val(null);
			$('#form_div').show();
		break;
		case 'edit':
			alert('edit');
		break;
		case 'delete':
			alert('delete');
		break;
		case 'show':
			alert('show');
		break;
		case 'save':
			var saveUrl = baseURL+'authors/post';
			var formData = $('#form_data').serialize();
			$.ajax({
				url: saveUrl,
				type: 'POST',
				dataType: 'json',
				data: {
					'nama': $('[name="nama"]').val(),
				},
			})
			.done(function() {
				console.log("success");
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
				$()
			});
			
		break;
		default :
			alert('Something error')
		break;
	}
}