//get the current year
$('#year').text(new Date().getFullYear())

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#main-nav'
})

//send email
const senderName = document.getElementById('inputName');
const email = document.getElementById('inputEmail');
const textMessage = document.getElementById('textareaMessage');
const submit = document.getElementsByClassName('contact-form')[0];

submit.addEventListener('submit', (event) => {

  event.preventDefault;

  Email.send({
    Host: "smtp.elasticemail.com",
    SecureToken : "476aba11-90b8-45b9-967d-af00ef531e2f",
    Username: "elena311979@gmail.com",
    Password: "30FA3E632C443523A3CF990C5B7ED76FFB50",
    To: 'elena311979@gmail.com',
    From: 'elena311979@gmail.com',
    Subject: "Message From Contact Form",
    Body: `Name: ${senderName.value} <br />
    Email: ${email.value} <br />
    Message: ${textMessage.value}`
  }).then (
    clearAndAlertOnSubmit(),
    console.log(senderName.value, email.value, textMessage.value),
    submit.reset()
  )
})

async function clearAndAlertOnSubmit() {
  let alertOnSubmit = new Promise(function(notify) {
    notify = Swal.fire({
      text: 'Your message was sent successfully. Thank you',
      icon: 'success',
      confirmButtonText: 'Ok'
      })}
  )
}

//animation on scroll







// dark mode\light mode

function darkmodeandlightmode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
  let toggleIcon = document.getElementById("toggle-icon");
  toggleIcon.classList.toggle("bi-sun-fill");
 }
