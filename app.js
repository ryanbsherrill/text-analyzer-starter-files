function totalWordCount(str) {
	var words = str.split(" ");
	return words.length;
}

function uniqueWordCount(str) {
	var words = str.toLowerCase(" ").split(" ");	
	var uniqueWords = words.filter(function(value, index, array) {
		return array.indexOf(value) === index;
	});
	return uniqueWords.length;
}

function averageWordLength(str) {
	var words = str.split(" ");
	var chars = str.split(" ").join("").split("");
	return (chars.length / words.length).toFixed(2);
}

$(document).ready(function() {
	$('button').click(function(e) {
		var userTextToAnalyze = $('.js-user-text').val();
		if (userTextToAnalyze !== "") {
			e.preventDefault();
			$('.js-total-word-count').text(totalWordCount(userTextToAnalyze));
			$('.js-unique-word-count').text(uniqueWordCount(userTextToAnalyze));
			$('.js-average-word-length').text(averageWordLength(userTextToAnalyze));
			$('.js-text-report').removeClass('hidden');
		}
		else{
			console.log("FAIL!");
		}   
	});
});