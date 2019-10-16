window.onload =function(){
	var board=document.getElementById("board");
	var child= board.children;
	var xo="X";
	var state= ["","","","","","","","",""];
	for( let i=0; i < child.length; i++ ){
		
		child[i].classList.add("square");
		child[i].onclick=function() {
		myFunction(child[i], i)};		
	}

	function myFunction(child, i) {
		if(state[i]===""){
			if (xo==="X") {
				child.innerHTML="X";
				child.classList.add("X");
				state[i] ="X";

				xo="O";
			} else
			if (xo==="O") {
				child.innerHTML="O";
				child.classList.add("O");
				state[i] = "O";
				xo="X";
			}
		}
	}
	
};
