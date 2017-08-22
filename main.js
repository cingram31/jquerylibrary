var input = document.getElementById("input");
var output = document.getElementById("output");
var ulist = document.getElementById("friendsList");
//console.log(input);

function capitalize(){
	var newName ="";
	for ( var l in input.value){
		if (l == 0){
			newName = input.value[l].toUpperCase()
		} else {
			newName += input.value[l].toLowerCase();
		}
	}


	output.innerHTML = "Capitalized Name: " + newName;
	//input.value = ''
	addItem();
}

//Challenge: find out how to do have a conditional target the enter key
//so that once it's pressed it can submit the form

document.onkeypress = function (e){
	if(e.keyCode === 13){
		return capitalize();
	}

}

function addItem(){
	var li = document.createElement('li');
	var text = li.innerHTML = newName;

	ulist.appendChild(li);
}




//after a name is capitalized make sure you clear the form


//create an ul order list that prints out each name that a user wants to capitalize without bullet points






