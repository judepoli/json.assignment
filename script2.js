let projectOne = {
	"title" : "Judith Politi", //key value pair // 
	"school" : "New York University, Tandon School of Engineering",
	"year" : 2025,
	"interests" : ["art", "fart", "idunno", "not physics"]
};

console.log( projectOne['title']);
console.log( projectOne['school']);
console.log( projectOne['year']);
console.log( projectOne['interests'][2]);

for (let i = 0; i < projectOne['interests'].length; i++){
	console.log("Index: " + i + " - " + projectOne['interests'][i]);
}
