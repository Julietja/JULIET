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
    SecureToken : "9bdc7d79-bd8c-4fc6-8f63-40321c41aa0f",
    To : 'julietalaribe6@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Submission",
    Body : "Name: " + document.getElementById("name").value
     + " <br> Email: " + document.getElementById("email").value
     + " Phone number: " + document.getElementById("phone").value
     + " <br> Message: " + document.getElementById("message").value
}).then(
  message => alert(Message sent successfully!)
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
