
const bwaForm = document.querySelector('#bwaForm');
const averageWeight = document.querySelector('#averageWeight')
let input1Data = '';
let input2Data = '';
let input3Data = '';
let input4Data = '';
let input5Data = '';
let input6Data = '';
let input7Data = '';
let totalinputData = 0;
// let totalAverage = 0;

bwaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    input1Data = e.target.querySelector('#qty1').value;
    input2Data = e.target.querySelector('#qty2').value;
    input3Data = e.target.querySelector('#qty3').value;
    input4Data = e.target.querySelector('#qty4').value;
    input5Data = e.target.querySelector('#qty5').value;
    input6Data = e.target.querySelector('#qty6').value;
    input7Data = e.target.querySelector('#qty7').value;

  
    input1Data = parseInt(input1Data);
    input2Data = parseInt(input2Data);
    input3Data = parseInt(input3Data);
    input4Data = parseInt(input4Data);
    input5Data = parseInt(input5Data);
    input6Data = parseInt(input6Data);
    input7Data = parseInt(input7Data);

    totalinputData = input1Data + input2Data + input2Data + input4Data + input5Data + input6Data + input7Data;
    totalinputData = Math.round(totalinputData);
    let totalAverage = totalinputData / 7;
    totalAverage = Math.round(totalAverage);
    
    averageWeight.textContent = `${totalAverage} lbs`;



})