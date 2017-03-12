/* APP FUNCTIONALITY
+  compute total word count of text - DONE
+  compute unique word count of text - DONE
+  compute average word length (in characters) of text - DONE
+  print each of these metrics in appropriate area of results section

   THINGS TO NOTE
+  link to jQ in  - DONE
+  link to app.js - DONE
+  add CSS classes to hook jQ event listeners
+  prefix class names w/ "js-" to preserve separtation of app logic 
   from presentation layer
+  in HTML file --> results section defaults to having
   a ".hidden" class applied --> the app code will need
   to remove that class when it's time to display the
   results
+  need to add CSS classes for your DOM manipulation
   layer to target (using the "js-" prefix) */


/* function to compute total word count of text - WORKING PROPERLY */
function totalWordCount(str) {
	var words = str.split(" ");
	return words.length;
}

/* function to compute unique word count of text - WORKING PROPERLY */
function uniqueWordCount(str) {
	var words = str.toLowerCase(" ").split(" ");	
	var wordFrequency = {};
	for (var i = 0; i <= words.length; i++) {
		if (words[i] in wordFrequency) {
			wordFrequency[words[i]]++;
		} else {
			wordFrequency[words[i]] = 1;
		}
	}
	return wordFrequency;
}

/* function to compute average word length (in characters) of text */
function averageWordLength(str) {
	var words = str.split(" ");
	var chars = str.split("");
	return chars.length / words.length;
}

/* event listeners to capture text and print metrics */
$(document).ready(function(){
	// print metrics in appropriate area of results section
});