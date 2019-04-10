function pushPage(page,controller){
	$('.ma-backdrop').click();
	$(".content").empty();
	$(".content").load('app/pages/'+page+'.html');

	this[controller]('list')
}