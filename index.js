$( function() {
    $( "#tabs" ).tabs();
  } );

let name = document.getElementById('nameinput');
let email = document.getElementById('emailinput');
let subject = document.getElementById('subjectinput');
// let message = document.getElementById('messageinput');
let sendbtn = document.getElementById('sendbtn');

sendbtn.addEventListener("click",()=>{
    emailjs.send("service_3op1nlv","template_pzr16ul",{
      form_name : name.value,
      email : email.value,
      subject : subject.value,
      // message : message.value
    }.then(
      alert("your message sent successfully")
    )

)
  
})
  
  