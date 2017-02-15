var textAboutKoen =' koen is ';
var persons = [
	{
		name: 'koen',
		aname: 'kort',
		age:17
	}
];

function putInHtml(text) {
	persons[0].omschrijving = text;
	document.getElementById("text-string").innerHTML = (text);
}

function tellAboutKoen(inner){
	var text = textAboutKoen + inner;
	putInHtml(text);
}

function givePrompt() {
	var inputPrompt = prompt('Wat is koen? ');
	if (inputPrompt ==='kut' || inputPrompt ==='lul' || inputPrompt==null || inputPrompt ==='rijk'){
		tellAboutKoen('een goeie jongen');
	} else{
		tellAboutKoen(inputPrompt);
	}
}

function myNumber(number) {
	for(var i=1;i<=number;i++){
		putInHtml(i);
	}
}

function person() {

	for(var i = 0; i < persons.length; i += 1) {
		document.write(persons[i].name + ' '+ persons[i].aname + ' is ' + persons[i].age + ' years old' + ' ' + persons[i].omschrijving );
	}

}

/*The return statement stops the execution of a function and returns a value from that function.
there is much to do with this statement you can use this
to let the numbers what we get in through the html to make it duplicate it
or minus it. the name times 2 has been chosen because many numbers need to be times 2
I hope you enjoyed this comment ;)
*/
function times2(){
	return 2;
}