let butnClick = document.querySelector('.dropbutn');
let oldMenu = document.getElementById("old-menu");
let newMenu = document.getElementById("new-menu");
let showDropdown = document.getElementById("dropdown-list");
let clickItem = document.getElementsByClassName('dropdown-item');

const changeOldMenu = () => {
 oldMenu.addEventListener("click", function(){
  oldMenu.style.display = 'none';
  newMenu.style.display = 'inline-block';
  showDropdown.style.display = 'block';
 }
 )
}
changeOldMenu();

const changeNewMenu = () => {
 newMenu.addEventListener("click", function(){
 newMenu.style.display = 'none';
 oldMenu.style.display = 'inline-block';
 showDropdown.style.display = 'none';
}
)
}

const removeDropdown = () => {
clickItem.addEventListener("click", function(){
showDropdown.style.display = 'none';
}
)
}
changeNewMenu();
removeDropdown()

function sendEmail(){
Email.send({
          Host : "smtp.elasticemail.com",
          Username : "julietalaribe6@gmail.com",
          Password : "9F353DA32CCFB95F02CF12DE3D1BB451A984",
          To : 'bamarachi6@gmail.com',
          From : document.getElementById("email").value,
          Subject : "New Contact Form Submission",
          Body : "Name: " + document.getElementById("name").value
          + " <br> Email: " + document.getElementById("email").value
          + " <br> Phone number: " + document.getElementById("phone").value
          + " <br> Message: " + document.getElementById("message").value
          }).then(
          message => alert("Message sent successfully!")
          );
}

/*
function changeMenu(){
 newMenu.style.display = 'none';
 oldMenu.style.display = 'inline-block';
 showDropdown.style.display = 'none';
}

const changeNewMenu = () => {
 newMenu.addEventListener("click", changeMenu()
);
}
changeNewMenu();

const removeDropdown = () => {
 clickLink.addEventListener("click", changeMenu(){
 );
}
removeDropdown();
*/
