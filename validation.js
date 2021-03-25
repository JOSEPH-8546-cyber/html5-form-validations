/*validation card */


/* function validCardNumber() {
    alert('hola')
    document.getElementById('btn-card').document.addEventListener('click', validCardNumber);
    if ('click' === Number )
         {
            alert('valid');
        }

    else {
        alert('invalid');
    }
}
  console.log(validCardNumber)    */

let cardnumber = document.getElementById('cardnumber');
let cvc = document.getElementById('cvc');
let amount = document.getElementById('amount');
let Firstname = document.getElementById('first-name');
let lastname = document.getElementById('last-name');
let city = document.getElementById('city');
let country = document.getElementById('country');
let postalCode = document.getElementById('postal');

let cancelbutton = document.getElementById('cancelbutton')
let sendbutton = document.getElementById('sendbutton')


cancelbutton.addEventListener('click', () => {
    alert('cancel is avaible')
})

sendbutton.addEventListener('click', () => {
    if (!cardnumber.value) {
        cardnumber.style.backgroundColor = "red"
    } else {
        cardnumber.style.backgroundColor = "white"
    }

    if (!cvc.value) {
        cvc.style.backgroundColor = "red"
    } else {
        cvc.style.backgroundColor = "white"

    }

    if (!amount.value) {
        amount.style.backgroundColor = "red"
    } else {
        amount.style.backgroundColor = "white"

    }

    if (!Firstname.value) {
        Firstname.style.backgroundColor = "red"
    } else {
        Firstname.style.backgroundColor = "white"

    }

    if (!lastname.value) {
        lastname.style.backgroundColor = "red"
    } else {
        lastname.style.backgroundColor = "white"

    }

    if (!city.value) {
        city.style.backgroundColor = "red"
    } else {
        city.style.backgroundColor = "white"

    }

    if (!country.value) {
        country.style.backgroundColor = "red"
    } else {
        country.style.backgroundColor = "white"

    }

    if (!postalCode.value) {
        postalCode.style.backgroundColor = "red"
    } else {
        postalCode.style.backgroundColor = "white"

    }

    if (!postalCode.value) {
        postalCode.style.backgroundColor = "red"
    } else {
        postalCode.style.backgroundColor = "white"

    }

})