var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




var modalEdit = document.getElementById("modal-edit");
var btnEdit = document.getElementById("edit");
var spanEdit = document.getElementsByClassName("closeEdit")[0];
btnEdit.onclick = function() {
    modalEdit.style.display = "block";
  }
  spanEdit.onclick = function() {
    modalEdit.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modalEdit) {
      modalEdit.style.display = "none";
    }
  }
  

