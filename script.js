// ==========================================
// STEP 15: Create an  EnergyBowl Class
// Jaskaran Singh coding for  Object-Oriented Programming
// ==========================================

class EnergyBowl {

constructor(size, base, fruits, toppings, protein, sweetener, instructions) {

this.size = size;
this.base = base;
this.fruits = fruits;
this.toppings = toppings;
this.protein = protein;
this.sweetener = sweetener;
this.instructions = instructions;

}
// ==========================================
// STEP 16: Created Method to Describe the energy building Bowl
// Class method implementation by jaskaran singh
// ==========================================

getDescription(){

return `
<h2>Your Energy Bowl Order</h2>

<p><strong>Size:</strong> ${this.size}</p>
<p><strong>Base:</strong> ${this.base}</p>
<p><strong>Fruits:</strong> ${this.fruits.join(", ")}</p>
<p><strong>Toppings:</strong> ${this.toppings.join(", ")}</p>
<p><strong>Protein:</strong> ${this.protein}</p>
<p><strong>Sweetener:</strong> ${this.sweetener}</p>
<p><strong>Instructions:</strong> ${this.instructions}</p>
`;

}

}
// ==========================================
// STEP 17: Capture Form Submission
// Jaswinder Singh coding for form handling and validation 
// ==========================================

document.getElementById("bowlForm").addEventListener("submit", function(event){

event.preventDefault();
// ==========================================
// STEP 18: Capture Dropdown Input Values
// Jaswinder Singh
// ==========================================

let size = document.getElementById("size").value;
let base = document.getElementById("base").value;
let protein = document.getElementById("protein").value;
let sweetener = document.getElementById("sweetener").value;
let instructions = document.getElementById("instructions").value;
// ==========================================
// STEP 19: Capture Selected Fruits

// ==========================================

let fruits = [];

document.querySelectorAll(".fruit:checked").forEach(item => {

fruits.push(item.value);

});


// ==========================================
// STEP 20: Capture Selected Toppings

// ==========================================

let toppings = [];

document.querySelectorAll(".topping:checked").forEach(item => {

toppings.push(item.value);

});
// ==========================================
// STEP 21: Create EnergyBowl Object

// ==========================================

let bowl = new EnergyBowl(size, base, fruits, toppings, protein, sweetener, instructions);



// ==========================================
// STEP 22:display order summary and output rendering
// ==========================================

document.getElementById("output").innerHTML = bowl.getDescription();

});
