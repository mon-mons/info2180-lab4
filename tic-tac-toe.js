window.onload =function(){
	var board=document.getElementById("board");
	var child= board.children;
	var xo="X";
	var state= ["","","","","","","","",""];
	for( let i=0; i < child.length; i++ ){
		
		child[i].classList.add("square");
		child[i].onclick=function() {
		onClicked(child[i], i)};	
		child[i].onmouseover= function(){onHover(child[i]);};
		child[i].onmouseout= function(){  
			child[i].classList.remove("hover");
		}

	}

	function onClicked(child, i) {
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

	function onHover(child){
		child.classList.add("hover");
	}
	
};
