// LOCK MODAL
let elLockModal = document.querySelector(".js-lock-modal");
let elLockModalForm = document.querySelector(".js-lock-modal-form");
let elLockModalPassword = document.querySelector(".js-lock-modal-password");
let myModal = new bootstrap.Modal(document.getElementById('lock-modal'), {
  keyboard: false
})
let elIncorrectMessage = document.querySelector(".js-lock-modal-incorrect-password-message");
let HIDDENPASSWORD = "topvolding";

// SIDEBER OFFCANVAS
let elJsSidebarOffcanvasUserToggle = document.querySelector(".js-sidebar-offcanves-user-toggle");
let elJsSidebarOffcanvesHeaderUserToggle = document.querySelector(".js-sidebar-offcanves-header-user-toggle");
let elSidebarOffcanvasUserTogglerIcon = elJsSidebarOffcanvasUserToggle.querySelector(".sidebar-offcanvas-user-toggler-icon");



// LOCK MODAL
elLockModalForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  let inputPassword = elLockModalPassword.value;
  console.log(inputPassword)
  if(inputPassword===HIDDENPASSWORD){
    elIncorrectMessage.classList.add("d-none");
    elLockModalPassword.value="";
    myModal.toggle()
  }
  else{
    elIncorrectMessage.classList.remove("d-none");
  }
})

// SIDEBAR OFFCANVAS
function openUserToggler(){
  elSidebarOffcanvasUserTogglerIcon.classList.toggle("sidebar-offcanvas-user-toggler-icon--open")
}
elJsSidebarOffcanvasUserToggle.addEventListener("click", function(){
  openUserToggler()
})
elJsSidebarOffcanvesHeaderUserToggle.addEventListener("click", function(){
  openUserToggler()
})