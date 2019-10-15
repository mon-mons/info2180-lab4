window.onload =function(){
	var board=document.getElementById("board");
	var child= board.children;
	for( var i=0; i< child.length; i++ ){
		
			child[i].classList.add("square");
	}
};
