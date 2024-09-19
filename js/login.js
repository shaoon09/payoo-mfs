// console.log('button clicking file added')


// document.getElementById('button-login').addEventListener('click', function(){
    
// })
//step -1 set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    //step-2 prevent default behavior ( prevent reloading browser)
    event.preventDefault();
    
    // step - 3 get the phone number & pin number

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);
    // step-4 validate phone & pin
    // this is temporary
    if(phoneNumber=== '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
        
        // allow to user to use the website
    }
    else{
        alert('wrong phone number & pin number')
    }


    

   })