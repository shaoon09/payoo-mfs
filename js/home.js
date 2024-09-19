// add money to the account
// step-1 add an event handler to the add money button inside the from
document.getElementById('btn-add-money').addEventListener('click', function(event){
    //   prevent page reload after submit
    event.preventDefault();
    //step-2 get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step-3 verify the pin number(wrong way not right way to validate)
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');
        //step-4 get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step-5 add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // update the balance in the ui/dom
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('failed to add money ! please try again')

}
   
});
