var modalPassword = document.getElementById("modal-password");
var btnpassword = document.getElementById("changePassword");
var spanPassword = document.getElementsByClassName("closePassword")[0];
btnpassword.onclick = function() {
    modalPassword.style.display = "block";
  }
  spanPassword.onclick = function() {
    modalPassword.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modalPassword) {
      modalPassword.style.display = "none";
    }
  }
