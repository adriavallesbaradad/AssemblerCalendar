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

//EVENT SECTION HEADER
document.querySelector(".titleWeekdaySection").innerHTML = weekdays[weekday];
document.querySelector(".titleMonthEventSection").innerHTML = months[month] + " " + day;

const lastDayoftheMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const lastMonthDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const upcomingMonthDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const lastWeekday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
console.log(weekdays[lastWeekday]);

// CALENDAR NUMBERS
let days = "";
let prevDate = "";

function getFirstWeekday() {
    date.setDate(1);
    return date.getDay();
}

function renderCalendar() {
    for (let i = 1; i <= lastDayoftheMonth; i++) {
        days += `<div>${i}</div>`
        monthDays.innerHTML = days;
    }

    for (let i = getFirstWeekday(); i > 0; i--) {
        prevDate += `<div class="prev-date">${lastMonthDays - i}</div>`
        prevMonthDays.innerHTML = prevDate;
    }

    for (let i = 1; i > (6 - lastWeekday); i++) {
        nextDate += `<div class="next-date">${i}</div>`
        nextMonthDays.innerHTML = nextDate;
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