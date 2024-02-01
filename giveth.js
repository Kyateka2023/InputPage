/*
const giveth = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // this right here is an array
const arr1 = [];
arr1[0] = 20;
arr1[1] = 43;
arr1[2] = 52;
arr1[3] = 54;
arr1[4] = 54;



console.log(giveth);
console.log("\n");
console.log(arr1);

let count = 1;

for (let i = 0; i < giveth.length; i++ )
{

    console.log(count + ". " + giveth[i]);
    count++;
}

console.log(`The last day of the week wll be a ${giveth[giveth.length - 4]}`)

const minerals = new Array("Gold", "Diamond", "Silver", "Cobalt", "Obsidian"); //Create an array

console.log("Am gonna print out minerals.")
function myMinerals(minerals) //create a function and set the parameter to the name of the array.
{
    console.log(minerals); // Print out the minerals.
}

minerals.forEach(myMinerals);// will loop through each element in an array.

console.log(typeof minerals);
console.log(Array.isArray(minerals));
*/

//Create a program that asks the user for 5 fruit names and stores them in an array. Then, print the entire list of fruits.
/*
const fruits = [];
fruits[0] = "apple";
fruits[1] = "banana";
fruits[2] = "pineapple";
fruits[3] = "mango";
fruits[4] = "jackfruit";
console.log(fruits);

function FruitsDisplayed(fruits)
{
    console.log(fruits);
}

fruits.forEach(FruitsDisplayed);
*/

//access and store all the input variables
const fruit1 = document.getElementById("fruit1");
const fruit2 = document.getElementById("fruit2");
const fruit3 = document.getElementById("fruit3");
const fruit4 = document.getElementById("fruit4");
const fruit5 = document.getElementById("fruit5");

//access and store the buttons in variables
const printButton = document.getElementById("print");
const resetButton = document.getElementById("reset"); 

//access the variable for the result p
const result = document.getElementById("result");


//create a function for first input element.
function print()
{
    //store the input value of the first elelemt
    let fruit1value = fruit1.value;
    let fruit2value = fruit2.value;
    let fruit3value = fruit3.value;
    let fruit4value = fruit4.value;
    let fruit5value = fruit5.value;

    //create an array for these items
    const fruitArray = [];
    fruitArray[0] = fruit1value;
    fruitArray[1] = fruit2value;
    fruitArray[2] = fruit3value;
    fruitArray[3] = fruit4value;
    fruitArray[4] = fruit5value;
    
    // create a paragraph with its ID
    const paragraph = document.createElement("p");
    result.appendChild(paragraph);

    //print out the values.
    for (let i = 0; i < fruitArray.length; i++)
    {
        let paragraphText = document.createTextNode(fruitArray[i]);
        paragraph.appendChild(paragraphText);    
    }

    console.log("Items have been printed out successfully");

}

printButton.addEventListener("click", print);

function removeAll()
{
    fruit1.value = " ";
    fruit2.value = " ";
    fruit3.value = " ";
    fruit4.value = " ";
    fruit5.value = " ";

    result.textContent = "";

    console.log("Items have been removed successfully.")

}

resetButton.addEventListener("click", removeAll);
