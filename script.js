const input = document.querySelector("#fruit");
const suggestionsList = document.querySelector(".suggestions");

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

function search(str) {
	let results = Array.from(fruit).filter((fruitName) =>
		fruitName.toLowerCase().includes(str.toLowerCase())
	);
	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value.trim();
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestionsList.innerHTML = "";

	if (inputVal !== "") {
		results.forEach((result) => {
			const li = document.createElement("li");
			li.textContent = result;
			suggestionsList.appendChild(li);
		});
		suggestionsList.style.display = "block";
	} else {
		suggestionsList.style.display = "none";
	}
}

function useSuggestion(e) {
	if (e.target.tagName === "LI") {
		input.value = e.target.textContent;
		suggestionsList.style.display = "none";
	}
}

input.addEventListener("input", searchHandler);
suggestionsList.addEventListener("click", useSuggestion);
