//CALENDAR VARIABLES
const date = new Date();
const weekday = date.getDay();
const day = date.getDate();
const month = date.getMonth();

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthDays = document.querySelector(".days");
let prevMonthDays = document.querySelector(".prev-date");
let nextMonthDays = document.querySelector(".next-date");

let days = "";

//EVENT SECTION HEADER
document.querySelector(".titleWeekdaySection").innerHTML = weekdays[weekday];
document.querySelector(".titleMonthEventSection").innerHTML = months[month] + " " + day;

const lastDayoftheMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const lastMonthDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const upcomingMonthDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const lastWeekday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

//CALENDAR SECTION HEADER
document.querySelector(".titleMonth p").innerHTML = months[month];
// document.querySelector(".btnBackMonth").addEventListener("click", rendernextMonth());
// document.querySelector(".btnNextMonth").addEventListener("click", renderCalendar());


// CALENDAR NUMBERS
function getFirstWeekday() {
    date.setDate(1);
    return date.getDay();
}

function renderCalendar() {
    for (let i = 1; i <= lastDayoftheMonth; i++) {
        if(i == new Date().getDate() && date.getMonth() == new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        }
        days += `<div>${i}</div>`
        monthDays.innerHTML = days;
    }

    for (let p = getFirstWeekday(); p > 0; p--) {
        days += `<div class="prev-date">${lastMonthDays - i}</div>`
        prevMonthDays.innerHTML = days;
    }

    let nextDays = (6 - lastWeekday);
    for (let n = 1; n <= nextDays; n++) {
        days += `<div class="next-date">${n}</div>`
        nextMonthDays.innerHTML = days;
    }
}


renderCalendar();




//MODAL SECTION

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