let pageHeader = document.getElementById('pageHeader');
let whatDoIDo = document.getElementById('whatDoIDo');
let contentJude = document.getElementById('contentJude');

document.addEventListener("DOMContentLoaded", function() {


let projectOne = {
	"title" : "Judith Politi", //key value pair // 
	"school" : "New York University, Tandon School of Engineering",
	"graduation_year" : 2025,
	"pretty_blue" : "#5BAFEB",
	"interests" : ["art", "fart", "idunno", "not physics"]
};

console.log( projectOne['title']);
console.log( projectOne['school']);
console.log( projectOne['graduation_year']);
console.log( projectOne['interests'][2]);


createElementProper(projectOne);





let jsonDataBase = [
{
	"title" : "Clara",
	"medium": "film",
	"year_span" : "in_progress",
	"technical_skills" : ["digital camera", "photoshop", "reaper" ]
},

{
	"title" : "Paganii",
	"medium": "clay",
	"year_span" : "2023",
	"technical_skills" : ["clay modeling", "prototyping", "illustrator" ]
},
{
	"title" : "columns",
	"medium": "web",
	"year_span" : "2023",
	"technical_skills" : ["html", "javascript", "css" ]
},

{
	"title" : "Casa Italiana flyers ",
	"medium": "web / print",
	"year_span" : "2023",
	"technical_skills" : ["illustrator", "photoshop" ]
},
{
	"title" : "MiddleSex Playing cards: Promoting mental health",
	"medium": "playing cards",
	"year_span" : "2022-23",
	"technical_skills" : ["illustrator", "photoshop" ]
},
{
	"title" : "Unite the Union Coventry Banner",
	"medium": "large format banner",
	"year_span" : "2022-23",
	"technical_skills" : ["illustrator", "photoshop" ]
}

];

for (var i = 0; i < jsonDataBase.length; i++){
	createElementProper(jsonDataBase[i]);
}


function createElementProper(incomingJSON){
	let newDiv = document.createElement("DIV"); // big div //
	newDiv.style.backgroundColor = incomingJSON['pretty_blue'];
	newDiv.classList.add('pageHeader');

	let headerMain = document.createElement("header");
	headerMain.classList.add('contentTitle');
	headerMain.innerText = projectOne['title'];
	newDiv.appendChild(headerMain);

	let subHeader = document.createElement("universityName");
	subHeader.classList.add('contentSchool');
	subHeader.innerText = projectOne['school'];
	newDiv.appendChild(subHeader);

	let subSubHeader = document.createElement('judeInterests');
	subSubHeader.classList.add('contentInterests');
	subSubHeader.innerText = projectOne['interests'];
	newDiv.appendChild(subSubHeader);

	contentJude.appendChild(newDiv);

}

});



















