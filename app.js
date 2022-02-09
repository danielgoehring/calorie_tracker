
// --------------------------------------- Selectors

const totalContainer = document.querySelector('.bottom-container');
const removeBtn = document.querySelector('.removebtn1');
const removeBtn2 = document.querySelector('.removebtn2');
const removeBtn3 = document.querySelector('.removebtn3');
const removeBtn4 = document.querySelector('.removebtn4');
const getTotalMacros = document.querySelector('.removebtn5');
const searchForm = document.querySelector('#form');
const searchForm2 = document.querySelector('#form2');
const searchForm3 = document.querySelector('#form3');
const searchForm4 = document.querySelector('#form4');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.meals');
const classDb = document.querySelector('.db');
let searchQuery = '';
let searchQuery2 = '';
let searchQuery3 = '';
let searchQuery4 = '';

let totalCalorieCount = 0;
let totalProteinCount = 0;
let totalCarbCount = 0;
let totalFatCount = 0;

let totalCalorieCount2 = 0;
let totalProteinCount2 = 0;
let totalCarbCount2 = 0;
let totalFatCount2 = 0;

let totalCalorieCount3 = 0;
let totalProteinCount3 = 0;
let totalCarbCount3 = 0;
let totalFatCount3 = 0;

let totalCalorieCount4 = 0;
let totalProteinCount4 = 0;
let totalCarbCount4 = 0;
let totalFatCount4 = 0;

let totals;

// ------------------------------------------------ Sending searched item

let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;
let count = dropdown.length;

let allOptions;
let running = true;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Food';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

//-------------------------------

let dropdown2 = document.getElementById('locality-dropdown2');
dropdown2.length = 0;
let count2 = dropdown2.length;

let allOptions2;
let running2 = true;

let defaultOption2 = document.createElement('option');
defaultOption2.text = 'Choose Food';

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

//-------------------------------

let dropdown3 = document.getElementById('locality-dropdown3');
dropdown3.length = 0;
let count3 = dropdown3.length;

let allOptions3;
let running3 = true;

let defaultOption3 = document.createElement('option');
defaultOption3.text = 'Choose Food';

dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0;

//-------------------------------

let dropdown4 = document.getElementById('locality-dropdown4');
dropdown4.length = 0;
let count4 = dropdown4.length;

let allOptions4;
let running4 = true;

let defaultOption4 = document.createElement('option');
defaultOption4.text = 'Choose Food';

dropdown4.add(defaultOption4);
dropdown4.selectedIndex = 0;


//-------------------------------------------------- Call fetchAPI functions for each food item


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('#input1').value;
    fetchAPI(); 
});
searchForm2.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery2 = e.target.querySelector('#input2').value;
    fetchAPI2(); 
    
});
searchForm3.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery3 = e.target.querySelector('#input3').value;
    fetchAPI3(); 
    
});
searchForm4.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery4 = e.target.querySelector('#input4').value;
    fetchAPI4(); 
   
});

// --------------------------- Fetch API functions

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=7020f5e0&app_key=132102389cb716fbe45af39b17af701a&ingr=${searchQuery}&nutrition-type=cooking&calories=100-300`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hints);
    console.log(data);

}

async function fetchAPI2() {
    const baseURL2 = `https://api.edamam.com/api/food-database/v2/parser?app_id=7020f5e0&app_key=132102389cb716fbe45af39b17af701a&ingr=${searchQuery2}&nutrition-type=cooking&calories=100-300`;
    const response2 = await fetch(baseURL2);
    const data2 = await response2.json();
    generateHTML2(data2.hints);
    console.log(data2);

}

async function fetchAPI3() {
    const baseURL3 = `https://api.edamam.com/api/food-database/v2/parser?app_id=7020f5e0&app_key=132102389cb716fbe45af39b17af701a&ingr=${searchQuery3}&nutrition-type=cooking&calories=100-300`;
    const response3 = await fetch(baseURL3);
    const data3 = await response3.json();
    generateHTML3(data3.hints);
    console.log(data3);

}

async function fetchAPI4() {
    const baseURL4 = `https://api.edamam.com/api/food-database/v2/parser?app_id=7020f5e0&app_key=132102389cb716fbe45af39b17af701a&ingr=${searchQuery4}&nutrition-type=cooking&calories=100-300`;
    const response4 = await fetch(baseURL4);
    const data4 = await response4.json();
    generateHTML4(data4.hints);
    console.log(data4);

}

// --------------------------- Add calories and macro info to page

const resultM1a = document.querySelector('.resultM1a');
const resultM1b = document.querySelector('.resultM1b');
const resultM1c = document.querySelector('.resultM1c');
const resultM1d = document.querySelector('.resultM1d');
const resultM1e = document.querySelector('.resultM1e');

function generateHTML(results) {

    let option;
    let optionName;
    let optionId;

    for (let i = 0; i < results.length; i++) {
          option = document.createElement('option');
          option.text = `Name: ${results[i].food.label}`;
          option.value = results[i].food.label;
          dropdown.add(option);
          optionName = option.value;
      } 

      dropdown.addEventListener('change', function(e) {
        

        for (let i = 0; i < results.length; i++) {
            if (e.target.value == results[i].food.label) {
            
                console.log(results[i].food.label);
                resultM1a.textContent = `Name: ${results[i].food.label}`;
                resultM1b.textContent = `Calories: ${Math.round(results[i].food.nutrients.ENERC_KCAL * 10) / 10}`;
                resultM1c.textContent = `Protein: ${Math.round(results[i].food.nutrients.PROCNT * 10) / 10}`;
                resultM1d.textContent = `Carbs: ${Math.round(results[i].food.nutrients.CHOCDF * 10) / 10}`;
                resultM1e.textContent = `Fat: ${Math.round(results[i].food.nutrients.FAT * 10) / 10}`;
                
                
                 totalCalorieCount = Math.round(results[i].food.nutrients.ENERC_KCAL * 10) / 10;
                 totalProteinCount = Math.round(results[i].food.nutrients.PROCNT * 10) / 10;
                 totalCarbCount = Math.round(results[i].food.nutrients.CHOCDF * 10) / 10;
                 totalFatCount = Math.round(results[i].food.nutrients.FAT * 10) / 10;

                 removeBtn.addEventListener('click', () => {
        
                    totalCalorieCount -= totalCalorieCount;
                    totalProteinCount -= totalProteinCount;
                    totalCarbCount -= totalCarbCount;
                    totalFatCount -= totalFatCount;
                
                    resultM1a.textContent = '';
                    resultM1b.textContent = '';
                    resultM1c.textContent = '';
                    resultM1d.textContent = '';
                    resultM1e.textContent = '';
                
        })
            
            }
      
        } 

      })

}


function generateHTML2(results) {

    let option2;
    let optionName2;
    let optionId2;

    for (let i = 0; i < results.length; i++) {
          option2 = document.createElement('option');
          option2.text = `Name: ${results[i].food.label}`;
          option2.value = results[i].food.label;
          dropdown2.add(option2);
          optionName2 = option2.value;
      } 

      dropdown2.addEventListener('change', function(e) {
        const resultM2a = document.querySelector('.resultM2a');
        const resultM2b = document.querySelector('.resultM2b');
        const resultM2c = document.querySelector('.resultM2c');
        const resultM2d = document.querySelector('.resultM2d');
        const resultM2e = document.querySelector('.resultM2e');

        for (let i = 0; i < results.length; i++) {
            if (e.target.value == results[i].food.label) {
            
                console.log(results[i].food.label);
                resultM2a.textContent = `Name: ${results[i].food.label}`;
                resultM2b.textContent = `Calories: ${Math.round(results[i].food.nutrients.ENERC_KCAL * 10) / 10}`;
                resultM2c.textContent = `Protein: ${Math.round(results[i].food.nutrients.PROCNT * 10) / 10}`;
                resultM2d.textContent = `Carbs: ${Math.round(results[i].food.nutrients.CHOCDF * 10) / 10}`;
                resultM2e.textContent = `Fat: ${Math.round(results[i].food.nutrients.FAT * 10) / 10}`;

                 totalCalorieCount2 = Math.round(results[i].food.nutrients.ENERC_KCAL * 10) / 10;
                 totalProteinCount2 = Math.round(results[i].food.nutrients.PROCNT * 10) / 10;
                 totalCarbCount2 = Math.round(results[i].food.nutrients.CHOCDF * 10) / 10;
                 totalFatCount2 = Math.round(results[i].food.nutrients.FAT * 10) / 10;

                removeBtn2.addEventListener('click', () => {
                    
                    totalCalorieCount2 -= totalCalorieCount2;
                    totalProteinCount2 -= totalProteinCount2;
                    totalCarbCount2 -= totalCarbCount2;
                    totalFatCount2 -= totalFatCount2;

                    resultM2a.textContent = '';
                    resultM2b.textContent = '';
                    resultM2c.textContent = '';
                    resultM2d.textContent = '';
                    resultM2e.textContent = '';
            })
            }
        } 
      })
}

function generateHTML3(results) {

    let option3;
    let optionName3;
    let optionId3;

    for (let i = 0; i < results.length; i++) {
          option3 = document.createElement('option');
          option3.text = `Name: ${results[i].food.label}`;
          option3.value = results[i].food.label;
          dropdown3.add(option3);
          optionName3 = option3.value;
      } 

      dropdown3.addEventListener('change', function(e) {
        const resultM3a = document.querySelector('.resultM3a');
        const resultM3b = document.querySelector('.resultM3b');
        const resultM3c = document.querySelector('.resultM3c');
        const resultM3d = document.querySelector('.resultM3d');
        const resultM3e = document.querySelector('.resultM3e');

        for (let i = 0; i < results.length; i++) {
            if (e.target.value == results[i].food.label) {
            
                console.log(results[i].food.label);
                resultM3a.textContent = `Name: ${results[i].food.label}`;
                resultM3b.textContent = `Calories: ${Math.round(results[i].food.nutrients.ENERC_KCAL * 10) / 10}`;
                resultM3c.textContent = `Protein: ${Math.round(results[i].food.nutrients.PROCNT * 10) / 10}`;
                resultM3d.textContent = `Carbs: ${Math.round(results[i].food.nutrients.CHOCDF * 10) / 10}`;
                resultM3e.textContent = `Fat: ${Math.round(results[i].food.nutrients.FAT * 10) / 10}`;

                 totalCalorieCount3 = Math.round(results[i].food.nutrients.ENERC_KCAL * 10) / 10;
                 totalProteinCount3 = Math.round(results[i].food.nutrients.PROCNT * 10) / 10;
                 totalCarbCount3 = Math.round(results[i].food.nutrients.CHOCDF * 10) / 10;
                 totalFatCount3 = Math.round(results[i].food.nutrients.FAT * 10) / 10;
        
                removeBtn3.addEventListener('click', () => {
                    
                    totalCalorieCount3 -= totalCalorieCount3;
                    totalProteinCount3 -= totalProteinCount3;
                    totalCarbCount3 -= totalCarbCount3;
                    totalFatCount3 -= totalFatCount3;

                    resultM3a.textContent = '';
                    resultM3b.textContent = '';
                    resultM3c.textContent = '';
                    resultM3d.textContent = '';
                    resultM3e.textContent = '';
            })
              
            }
        } 
      })
}

function generateHTML4(results) {

    let option4;
    let optionName4;
    let optionId4;

    for (let i = 0; i < results.length; i++) {
          option4 = document.createElement('option');
          option4.text = `Name: ${results[i].food.label}`;
          option4.value = results[i].food.label;
          dropdown4.add(option4);
          optionName4 = option4.value;
      } 

      dropdown4.addEventListener('change', function(e) {
        const resultM4a = document.querySelector('.resultM4a');
        const resultM4b = document.querySelector('.resultM4b');
        const resultM4c = document.querySelector('.resultM4c');
        const resultM4d = document.querySelector('.resultM4d');
        const resultM4e = document.querySelector('.resultM4e');

        for (let i = 0; i < results.length; i++) {
            if (e.target.value == results[i].food.label) {
            
                console.log(results[i].food.label);
                resultM4a.textContent = `Name: ${results[i].food.label}`;
                resultM4b.textContent = `Calories: ${Math.round(results[i].food.nutrients.ENERC_KCAL * 10) / 10}`;
                resultM4c.textContent = `Protein: ${Math.round(results[i].food.nutrients.PROCNT * 10) / 10}`;
                resultM4d.textContent = `Carbs: ${Math.round(results[i].food.nutrients.CHOCDF * 10) / 10}`;
                resultM4e.textContent = `Fat: ${Math.round(results[i].food.nutrients.FAT * 10) / 10}`;

                 totalCalorieCount4 = Math.round(results[i].food.nutrients.ENERC_KCAL * 10) / 10;
                 totalProteinCount4 = Math.round(results[i].food.nutrients.PROCNT * 10) / 10;
                 totalCarbCount4 = Math.round(results[i].food.nutrients.CHOCDF * 10) / 10;
                 totalFatCount4 = Math.round(results[i].food.nutrients.FAT * 10) / 10;
              
                removeBtn4.addEventListener('click', () => {

                    totalCalorieCount4 -= totalCalorieCount4;
                    totalProteinCount4 -= totalProteinCount4;
                    totalCarbCount4 -= totalCarbCount4;
                    totalFatCount4 -= totalFatCount4;
                    
                    resultM4a.textContent = '';
                    resultM4b.textContent = '';
                    resultM4c.textContent = '';
                    resultM4d.textContent = '';
                    resultM4e.textContent = '';
            })
            }
        } 
      })
}

//----------------------------------------- Display total macros to page

    const totalCal = document.querySelector('.totalCal');
    const totalPro = document.querySelector('.totalPro');
    const totalCar = document.querySelector('.totalCar');
    const totalFat = document.querySelector('.totalFat');
    
    getTotalMacros.addEventListener('click', () => {

   
    totalCal.textContent = `Total Calories: ${totalCalorieCount + totalCalorieCount2 + totalCalorieCount3 + totalCalorieCount4}`;
    totalPro.textContent = `Total Protein: ${totalProteinCount + totalProteinCount2 + totalProteinCount3 + totalProteinCount4 }`;
    totalCar.textContent = `Total Carbs: ${totalCarbCount + totalCarbCount2 + totalCarbCount3 + totalCarbCount4}`;
    totalFat.textContent = `Total Fat: ${totalFatCount + totalFatCount2 + totalFatCount3 + totalFatCount4}`;

    console.log(`Total Calories: ${Math.round(totalCalorieCount + totalCalorieCount2 + totalCalorieCount3 + totalCalorieCount4 * 10) / 10}`);
    console.log(`Total Protein: ${Math.round(totalProteinCount + totalProteinCount2 + totalProteinCount3 + totalProteinCount4 * 10) / 10}`);
    console.log(`Total Carbs: ${Math.round(totalCarbCount + totalCarbCount2 + totalCarbCount3 + totalCarbCount4 * 10) / 10}`);
    console.log(`Total Fat: ${Math.round(totalFatCount + totalFatCount2 + totalFatCount3 + totalFatCount4 * 10) / 10}`);
})
