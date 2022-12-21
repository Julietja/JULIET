
let butnClick = document.querySelector('.dropbutn');
let oldMenu = document.getElementById("old-menu");
let newMenu = document.getElementById("new-menu");
let showDropdown = document.getElementById("dropdown-list");
let clickLink = document.getElementById("dropdown-item");

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
changeNewMenu();

const removeDropdown = () => {
 clickLink.addEventListener("click", function(){
  oldMenu.style.display = 'inline-block';
  newMenu.style.display = 'none';
  showDropdown.style.display = 'none';
 }
 )
}
removeDropdown();



/*let changeNewMenu = () => {

 butnClick.addEventListener("click", function(){
  newMenu = document.getElementById("new-menu");
  newMenu.style.display = 'none';
  oldMenu.style.display = 'block';
  showDropdown.style.display = 'none';
 }
 )
}

changeNewMenu();
*/
