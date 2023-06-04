//get the current year
$('#year').text(new Date().getFullYear())

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#main-nav'
})

//send email
const senderName = document.getElementById('inputName').value;
const email = document.getElementById('inputEmail').value;
const textMessage = document.getElementById('textareaMessage').value;
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
    Body: `Name: ${senderName} <br />
    Email: ${email} <br />
    Message: ${textMessage}`
  }).then (
    clearAndAlertOnSubmit(),
  )
})

async function clearAndAlertOnSubmit() {
  let alertOnSubmit = new Promise(function(notify) {
    notify = Swal.fire({
      text: 'Your message sent successfully. Thank you',
      icon: 'success',
      confirmButtonText: 'Ok'
      })}
  )
  submit.reset() = await alertOnSubmit;
}

//easeljs



//define scrollspy
// $('body').scrollspy({ target: '#main-nav' })
//
// //make smooth Scrolling
// $('#main-nav a').on('click', function (event) {
//   if (this.hash !== '') {
//     event.preventDefault()
//
//     const hash = this.hash
//
//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800,
//       function () {
//         window.location.hash = hash
//       }
//     )
//   }
// })
