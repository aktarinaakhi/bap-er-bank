function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    inputField.value = '';
    return inputFieldValue;

}
function getInnerValue(fieldId) {
    const innerValue = document.getElementById(fieldId);
    const innerValueText = innerValue.innerText;
    const value = parseFloat(innerValueText);
    return value;
}
function updateTotal(fieldId, amount) {
    console.log(fieldId, amount);
    // const updateValue = document.getElementById(fieldId);
    // const updateValueInText = updateValue.innerText;
    // const previousTotal = parseFloat(updateValueInText);

    const previousTotal = getInnerValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;

}
function updateBalance(amount, isAdd) {
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceText = balanceTotal.innerText;
    // const previousBalance = parseFloat(balanceText);

    const previousBalance = getInnerValue('balance-total');
    let newBalance;

    if (isAdd == true) {
        newBalance = previousBalance + amount;

    }
    else {
        newBalance = previousBalance - amount;

    }
    document.getElementById('balance-total').innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    console.log(amount);
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);

    }


})
//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerValue('balance-total');
    console.log(amount);

    if (amount > 0 && balance >= amount) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})