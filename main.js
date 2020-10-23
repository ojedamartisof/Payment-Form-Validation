let form = document.querySelector("form");
let msgAlert = document.querySelector("#alert");
let card = document.querySelector("#inputcard");
let cvc = document.querySelector("#inputPassword4");
let amount = document.querySelector("#inputPassword");
let firstname = document.querySelector("#inputAddress");
let lastname = document.querySelector("#lastname");
let city = document.querySelector("#inputCity");
let state = document.querySelector("#inputState");
let zip = document.querySelector("#inputZip");


form.addEventListener("submit", e => {
    e.preventDefault();
    //CARDNUMBER

    if (card.value == "" || !/[0-9]{13,16}/.test(cardNumber.value)) {
        msgAlert.classList.remove("d-none");
        card.classList.add("is-invalid");
        card.classList.add("alert-danger");
    } else{
        msgAlert.classList.add("d-none");
        card.classList.remove("is-invalid");
        card.classList.add("is-valid");
    }

    //CVC

    if (cvc.value === "" || !/^[0-9]{3,4}$/.test(cvc.value)) {
        msgAlert.classList.remove("d-none");
        cvc.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        cvc.classList.remove("is-invalid");
        cvc.classList.add("is-valid");
    }

    //AMOUNT

    if (amount.value === "" ||
        !/^(?:[$]|)[+-]?[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{1})?|(?:,[0-9]{3})*(?:\.[0-9]{1,2})?|(?:\.[0-9]{3})*(?:,[0-9]{1,2})?)$/.test(
            amount.value
        )) {
        msgAlert.classList.remove("d-none");
        amount.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        amount.classList.remove("is-invalid");
        amount.classList.add("is-valid");
    }

    //FIRST NAME

    if (firstname.value === "" || !/^[a-zA-Z '.-]*$/.test(firstname.value)) {
        firstname.classList.add("alert-danger");
        firstname.classList.add("is-invalid");
        alert.classList.remove("d-none")
    } else {
        firstname.classList.remove("alert-danger");
        firstname.classList.remove("is-invalid");
        firstname.classList.add("is-valid");

    }

    //lAST NAME

    if (lastname.value === "" || !/^[a-zA-Z '.-]*$/.test(lastname.value)) {
        lastname.classList.add("alert-danger");
        lastname.classList.add("is-invalid");
        alerts.classList.remove("d-none")

    } else {
        lastname.classList.remove("alert-danger");
        lastname.classList.remove("is-invalid");
        lastname.classList.add("is-valid");

    }

    //CITY

    if (city.value === "" || !/^[a-zA-Z '.-]*$/.test(city.value)) {
        city.classList.add("alert-danger");
        city.classList.add("is-invalid");
        alerts.classList.remove("d-none")
    } else {
        city.classList.remove("alert-danger");
        city.classList.remove("is-invalid");
        city.classList.add("is-valid");

    }

    //STATE

    if (state.value === "") {
        state.classList.add("alert-danger");
        state.classList.add("is-invalid");
        alerts.classList.remove("d-none");
    } else {
        state.classList.remove("alert-danger");
        state.classList.remove("is-invalid");
        state.classList.add("is-valid");

    }

    //ZIP CODE

    if (zip.value === "" || !/^[0-9]{7}(?:-[0-9]{6})?$/.test(postal.value)) {
        zip.classList.add("alert-danger");
        zip.classList.add("is-invalid");
        zip.classList.remove("d-none")
    } else {
        zip.classList.remove("alert-danger");
        zip.classList.remove("is-invalid");
        zip.classList.add("is-valid");

    }
    console.log("SENT");
});

let cancel = document.getElementById("cancel")
cancel.addEventListener("click", e => {

    form.reset()

})