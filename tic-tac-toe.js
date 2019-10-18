window.onload =function(){
	var board=document.getElementById("board");
	var statusDiv=document.getElementById("status");
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
				if(who_won("X")){
					statusDiv.innerHTML="Congratulations! X is the Winner";
					statusDiv.classList.add("you-won");

					
				}

				xo="O";
			} else
			if (xo==="O") {
				child.innerHTML="O";
				child.classList.add("O");
				state[i] = "O";
				if(who_won("O")){
					statusDiv.innerHTML="Congratulations! O is the Winner";
					statusDiv.classList.add("you-won");
				}
				xo="X";
			}
		}
	}

	function onHover(child){
	
		child.classList.add("hover")

	}
	
	function who_won(letter){
		for(let i=0;i<7;i+=3){
			if (state[i]===letter && state[i+1]===letter && state[i+2]===letter){
				return true;
			}
		}
		for(let i=0;i<3;i++){
			if(state[i]===letter && state[i+3]===letter && state[i+6]===letter){
				return true;
			}

		}

		if((state[0]===letter && state[4]===letter && state[8]===letter)  || (state[2]===letter && state[4]===letter && state[6]===letter)){
			return true;
		}
		
		return false; 

	}




};
