window.onload =function(){
	var board=document.getElementById("board");
	var statusDiv=document.getElementById("status");
	var child= board.children;
	var xo="X";
	var state= ["","","","","","","","",""];
	let btn =document.getElementsByClassName("btn")[0];

	btn.onclick= function(){buttonCLicked()};
	
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
			if ((state[i]===letter) && (state[i+1]===letter) && (state[i+2]===letter)){
				for( let j=0; j < child.length; j++ ){
					child[j].onclick = function () {};
				}
				return true;
			}
		}
		for(let i=0;i<3;i++){
			if((state[i]===letter) && (state[i+3]===letter) && (state[i+6]===letter)){
				for( let j=0; j < child.length; j++ ){
					child[j].onclick = function () {};
				}
				return true;
			}

		}

		if(((state[0]===letter) && (state[4]===letter) && (state[8]===letter))  || ((state[2]===letter) && (state[4]===letter) && (state[6]===letter))){
			for( let j=0; j < child.length; j++ ){
				child[j].onclick = function () {};
			}
			return true;
		}
		
		return false; 

	}

	function buttonCLicked() {
		for(let i=0; i< child.length;i++){
		
			state[i] = "";
			child[i].innerHTML ="";
			child[i].onclick=function() {onClicked(child[i], i)};
			child[i].classList.remove("X");
			child[i].classList.remove("O");
			
			
			
		
		}
		statusDiv.innerHTML="Move your mouse over a square and click to play an X or an O.";
		statusDiv.classList.remove("you-won");
	}




};
