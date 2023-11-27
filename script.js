let pageHeader = document.getElementById('pageHeader');
let whatDoIDo = document.getElementById('whatDoIDo');
let contentJude = document.getElementById('contentJude');

document.addEventListener("DOMContentLoaded", function() {


let jsonDataBase = [
{
	"title" : "Clara / New York",
	"medium": "Film",
	"pretty_lavender" : "#E7E7F2",
	"year_span" : "In Progress",
	"technical_skills" : ["digital camera", "Photoshop", "Reaper", "PremierePro" ]
},

{
	"title" : "Paganii",
	"medium": "Clay",
	"year_span" : "2023",
	"technical_skills" : ["clay model", "prototyping", "Illustrator" ]
},
{
	"title" : "Columns",
	"medium": "Website",
	"year_span" : "2023",
	"technical_skills" : ["html", "javascript", "css" ]
},

{
	"title" : "NYU Casa Italiana Zerilli Marimo",
	"medium": "Web / Print",
	"year_span" : "2023",
	"technical_skills" : ["Illustrator", "Photoshop" ]
},
{
	"title" : "MiddleSex Playing Cards: Promoting Mental Health",
	"medium": "Playing Cards",
	"year_span" : "2022-23",
	"technical_skills" : ["Illustrator", "Photoshop" ]
},
{
	"title" : "Unite the Union Coventry Banner",
	"medium": "Large Format Banner",
	"year_span" : "2022-23",
	"technical_skills" : ["Illustrator", "Photoshop" ]
}

];

for (var i = 0; i < jsonDataBase.length; i++){
	createElementProper(jsonDataBase[i]);
}


function createElementProper(incomingJSON){
	let newContent = document.createElement("DIV"); // big div //
	newContent.style.backgroundColor = incomingJSON['pretty_blue'];
	newContent.classList.add('newContent');

	let newContentHeading = document.createElement("H1");
	newContentHeading.classList.add('newContentHeading');
	newContentHeading.innerText = incomingJSON['title'];
	newContent.appendChild(newContentHeading);

	let newContentMedium = document.createElement("H2");
	newContentMedium.classList.add('newContentMedium');
	newContentMedium.innerText = incomingJSON['medium'];
	newContent.appendChild(newContentMedium);

	let newContentDate = document.createElement('H2');
	newContentDate.classList.add('newContentDate');
	newContentDate.innerText = incomingJSON['year_span'];
	newContent.appendChild(newContentDate);
 
 	let newContentSkills = document.createElement("UL");
 	newContent.appendChild(newContentSkills);
 	for (var i = 0; i < incomingJSON['technical_skills'].length; i++) {
	    var currentTechnicalSkill = incomingJSON['technical_skills'][i];
	    var newSkillItem = document.createElement("LI");
	    newSkillItem.innerText = currentTechnicalSkill;
	    newContentSkills.appendChild(newSkillItem);
  	}

	contentJude.appendChild(newContent);

}

});



















