const adviceBtn = document.querySelector('.advice-btn').addEventListener('click', () => {printIdAndAdvice()});
let adviceTextField = document.getElementById('advice-text');
let adviceIdField = document.getElementById('device-id');


async function adviceGenerate(){
    const url = 'https://api.adviceslip.com/advice';
    const response = await fetch(url);
    return await response.json();  
}

async function printIdAndAdvice(){
    const adviceItem = await adviceGenerate();
    const adviceText = adviceItem.slip.advice;
    const adviceId = adviceItem.slip.id;
    adviceTextField.innerHTML = adviceText;
    adviceIdField.innerHTML = adviceId;
}
