$( document ).ready(function() { 
    $('ul').on('click', 'li', function() {
        $(this).remove();
    });
});

function addItem(){
	var newItem = $("#newItem").val();
		$("#theList").prepend("<li>"+newItem+"</li>");
};