switch(type) {
	case 'list':
		$.get('http://localhost:8100/authors/list',function(res){
			$.each(res,function(i,data){
				let html = '<tr>'+
							'<td>'+data.nama+'</td>'+
						   '</tr>';
				$('#list-data').append(html);
			})
		});
	break;
	case 'add':
			alert('add');
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
		alert('delete');
	break;
	default :
		alert('Something error')
	break;
}