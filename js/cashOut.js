document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, pinNumber);
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
       const balanceNumber = parseFloat(balance);

       const newBalance = balanceNumber - cashOutNumber;

       document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('failed to Cash out, please try again later')
    }
}); 