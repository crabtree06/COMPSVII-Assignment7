console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Steak", "Sushi", "Tacos", "Pasta", "Ceviche", "Lomo Saltado"]


// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}




// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}




