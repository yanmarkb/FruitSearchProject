//Targets HTML with id of fruit
const input = document.querySelector("#fruit");
//Target HTML with class of suggestions
const suggestionsList = document.querySelector(".suggestions");
//Created a set to practive set/map feature in ES2015. I knew that you can not make duplicates in a Set so I opted to changing the array into a set. Maybe made more work for myself than I needed.
const fruit = new Set([
	"Apple",
	"Apricot",
	"Avocado 🥑",
	"Banana",
	"Bilberry",
	"Blackberry",
	"Blackcurrant",
	"Blueberry",
	"Boysenberry",
	"Currant",
	"Cherry",
	"Coconut",
	"Cranberry",
	"Cucumber",
	"Custard apple",
	"Damson",
	"Date",
	"Dragonfruit",
	"Durian",
	"Elderberry",
	"Feijoa",
	"Fig",
	"Gooseberry",
	"Grape",
	"Raisin",
	"Grapefruit",
	"Guava",
	"Honeyberry",
	"Huckleberry",
	"Jabuticaba",
	"Jackfruit",
	"Jambul",
	"Juniper berry",
	"Kiwifruit",
	"Kumquat",
	"Lemon",
	"Lime",
	"Loquat",
	"Longan",
	"Lychee",
	"Mango",
	"Mangosteen",
	"Marionberry",
	"Melon",
	"Cantaloupe",
	"Honeydew",
	"Watermelon",
	"Miracle fruit",
	"Mulberry",
	"Nectarine",
	"Nance",
	"Olive",
	"Orange",
	"Clementine",
	"Mandarine",
	"Tangerine",
	"Papaya",
	"Passionfruit",
	"Peach",
	"Pear",
	"Persimmon",
	"Plantain",
	"Plum",
	"Pineapple",
	"Pomegranate",
	"Pomelo",
	"Quince",
	"Raspberry",
	"Salmonberry",
	"Rambutan",
	"Redcurrant",
	"Salak",
	"Satsuma",
	"Soursop",
	"Star fruit",
	"Strawberry",
	"Tamarillo",
	"Tamarind",
	"Yuzu",
]);

//Takes user's input into search bar
function search(str) {
	//Converts set into an array using Array.from. Then using .filter() I find the fruit name.
	let results = Array.from(fruit).filter((fruitName) =>
		//Makes it case insensitive
		fruitName.toLowerCase().includes(str.toLowerCase())
	);

	return results;
}

//Is an event handler, can use some more explaination/research on this one. All I know is it is triggered when ever the user interacts with input field. I made it so the suggestion bar would show up.
function searchHandler(e) {
	//Extracts the trimmed value from the input
	const inputVal = e.target.value.trim();
	//Call the search function with the trimmed input value to get results
	const results = search(inputVal);
	//Displays results
	showSuggestions(results, inputVal);
}

//Displays suggestions under search bar.
function showSuggestions(results, inputVal) {
	//suggestionsList is responsible for displaying the search suggestion. Sets property to an empty string so it knows when to display the suggestion bar below the search bar.
	suggestionsList.innerHTML = "";
	//Checks for emplty input so it can change the display property.
	if (inputVal !== "") {
		//If it is not (!==) empty it iterates through the results array, creating a list item (<li>) for each results. Looks for fruit items in the set to set a fruit name.
		results.forEach((result) => {
			const li = document.createElement("li");
			li.textContent = result;
			//Appends each list item to the suggestion list
			suggestionsList.appendChild(li);
		});
		//Sets display propety of the suggestionList so it is visible after typing
		suggestionsList.style.display = "block";
	} else {
		//If nothing is typed then it will set display property to none
		suggestionsList.style.display = "none";
	}
}

//This makes it so when someone clicks a suggestion that it will populate the input in the search bar.
function useSuggestion(e) {
	//Checks if the element clicked is a list item.
	if (e.target.tagName === "LI") {
		//This sets the input to the value of the clicked list item
		input.value = e.target.textContent;
		//This makes it so after you click the list item it sets the display property of the list to none so it will hide the list again.
		suggestionsList.style.display = "none";
	}
}

//This makes it so when the user tpyes into the input field, the 'searchHandler' function is called to handle the input and display suggestions.
input.addEventListener("input", searchHandler);

//This makes it so when the user clicks a suggestion the 'useSuggestion' function is called to update the input field and hide the suggestion using the display property in CSS.
suggestionsList.addEventListener("click", useSuggestion);
