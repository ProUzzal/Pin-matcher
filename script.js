//global variable----
const generatorPinInput = document.querySelector('#generate-screen');
const inputedPin = document.querySelector('#cal-screen');
//generate-pin-area
function pinGenerator() {
    document.querySelector('#generate-pin').addEventListener('click', () => {
        const pin = Math.floor(Math.random() * 9000) + 1000;
        generatorPinInput.value = pin;
    })
}
pinGenerator()
//Pin- Matching -Area
document.querySelector('#cal-body').addEventListener('click', (e) => {
    if (e.target.className === 'button') {
        if (e.target.innerText === 'C') {
            inputedPin.value = '';
        }
        else if (e.target.innerText === '<') {
            if (inputedPin.value.length > 0) {
                inputedPin.value = inputedPin.value.slice(0, -1);
            }
        }
        else {
            inputedPin.value += '' + e.target.innerText;
        }
    };

})
//event-handler on submit button and verification 
// <p id="action-id" class="action-left"> <span id='action-number'>3 </span> try left</p>
document.querySelector('#submitId').addEventListener('click', () => {
    if (
        generatorPinInput.value.trim().length <= 0 || generatorPinInput.value.trim().length <= 0) {
        alert('You can not go forward without generate pin or input pin')
    }
    else {
        if (generatorPinInput.value === inputedPin.value) {
            alert(`${document.querySelector('#success-message').innerText}`)
        }
        else {
            alert(`${document.querySelector('#error-message').innerText}`)
            if (document.querySelector('#action-number').innerText-- <= 1) {
                document.querySelector('#submitId').setAttribute('disabled', 'true');
                document.querySelector('#action-id').innerHTML = `<h2 style="color: red;">Your attempt faild</h2>`
            }
        }
    }

})