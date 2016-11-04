// An array of biology words for 1st graders
var biologyWords = [
	"rose",
	"daisy",
	"chrloroplast",
	"leaf",
	"chlorophyll",
	"rhyzomes",
	"internodes",
	"water",
	"soil",
	"sun",
	"phytomorphology",
	"air"
];

// Create a function that takes an array and returns an array of appropriate biology words for kids in 1st grade.
function firstGrade() {
	var newArray = [];
	for (i=0; i<biologyWords.length; i++) {
		if (biologyWords[i].length < 6) {
			newArray.push(biologyWords[i]);
		} else {
		}
	}
	return newArray;
}

console.log(firstGrade());
