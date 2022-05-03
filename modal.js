// Get the modal
var modal = document.getElementById("eventModal");

// Get the button that opens the modal
var btn = document.getElementById("btnNewEvent");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// when button checked show "add time end date"

const btnCheckEndDate = document.querySelector("#endDateCheckBox");
console.log(btnCheckEndDate);

// btnCheckEndDate.addEventListener("change", function(){
//     if (this.check){
//         document.getElementById("endDate").style.display = "block";
//     } else {
//         document.getElementById("endDate").style.display = "none";
//     }
// })
// function btnShowEndDate(){
//     document.getElementById("endDate").style.display = "block";
// }
// console.log(btnCheckEndDate);