var theBtn = document.querySelector('#myBtn');

var myBtnA = jQuery('#myBtn');
var myBtnB = $('#myBtn');

$(document).ready(function() {
  $('#fullpage').fullpage({
		sectionsColor: ['DDD', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000']
	});
});

console.log('full page loaded');





// STUFF FROM LAST DESIGN CLASS BELOW
var totalScore = 0;

document.querySelector('#evalQuiz').addEventListener('click', function(event){
	var q1Val = document.querySelector('[name="one"]:checked').value;
	var q2Val = document.querySelector('[name="two"]:checked').value;

	if (q1Val === "a") {
		totalScore++;
	}

	if (q2Val === "c") {
		totalScore++;
	}

	var feedbackEl = document.getElementById('quizFeedback');

	feedbackEl.innerHTML = "Your score was: " + totalScore + "/2 questions.";

	if (totalScore < 2) {
		feedbackEl.classList.add('badQuiz');
	} else {
		feedbackEl.classList.add('goodQuiz');
	}

});
