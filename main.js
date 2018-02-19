// var thePets=[{
// 	"name":"meowsalot",
// 	"species":"cat",
// 	"farfood":"tuna"
// },
// "name":"Barky",
// 	"species":"dog",
// 	"farfood":"carrots"
// },
// ]
var ourRequest= new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json')
ourRequest.onload=function(){
	console.log(ourRequest.responseText);
};
ourRequest.send();