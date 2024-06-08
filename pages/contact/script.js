const form = document.querySelector('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone-number')
const message = document.getElementById('message')


function sendEmail(){
    const bodyMessage = `Full Name: ${firstName.value + ' ' + lastName.value}<br> Email: ${email.value}<br> Phone Number: ${phoneNumber.value}<br> Message: ${message.value}`


    Email.send({
        SecureToken: "33dfeb71-7ea9-4e87-a174-b705be6dcbdc" ,
        To : 'gabrielmolodini2@gmail.com',
        From : "gabrielmolodini2@gmail.com",
        Subject : "FLY4SEASON - Paragliding in Georgia",
        Body : bodyMessage
    }).then(
      message => {
        if(message == 'OK'){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
                
              });              
        }
      }
    );
    

    firstName.value = ''
    lastName.value = ''
    email.value = ''
    phoneNumber.value = ''
    message.value = ''

}


form.addEventListener('submit', e => {
    e.preventDefault()

    sendEmail()
})