// mobilemenu show hide and responsive
let menubtn = document.getElementById('menubtn');
let mobilemenu = document.getElementById("mobilemenu");
menubtn.onclick = function() {menuShowHide()};
function menuShowHide() {
    // show menu
    mobilemenu.classList.toggle("-left-0");
    // button icon change
    if (menubtn.classList.contains("ri-menu-4-line")) {
        menubtn.classList.add("ri-close-line");
        menubtn.classList.remove("ri-menu-4-line")
    
      } else {
        menubtn.classList.remove("ri-close-line");
        menubtn.classList.add("ri-menu-4-line");
      }
}