//CALENDAR VARIABLES
const date = new Date();
let weekday = date.getDay();
let day = date.getDate();
let month = date.getMonth();

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//CALENDAR SECTION HEADER
document.querySelector(".btnBackMonth").addEventListener("click", renderPreviousMonth);
document.querySelector(".btnNextMonth").addEventListener("click", rendernextMonth);
document.querySelector(".btnNewEvent").addEventListener("click", showModal);

document.querySelector(".titleWeekdaySection").innerHTML = weekdays[weekday];
document.querySelector(".titleMonthEventSection").innerHTML = months[month] + " " + day;

//CALENDAR SECTION NUMBERS
document.querySelector(".days").addEventListener("click", showModal);

//SHOW CALENDAR
function renderCalendar() {

    weekday = date.getDay();
    day = date.getDate();
    date.getDate();
    month = date.getMonth();

    let monthDays = document.querySelector(".days");
    let days = "";

    //CALENDAR SECTION HEADER
    document.querySelector(".titleYear").innerHTML = date.getFullYear();
    document.querySelector(".titleMonth p").innerHTML = months[month];

    // CALENDAR NUMBERS
    const lastDayoftheMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const lastMonthDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const lastWeekday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    function getFirstWeekday() {
        date.setDate(1);
        return date.getDay();
    }

    for (let p = getFirstWeekday(); p > 0; p--) {
        days += `<div class="prev-date">${lastMonthDays - p}</div>`
        monthDays.innerHTML = days;
    }

    for (let i = 1; i <= lastDayoftheMonth; i++) {
        if (i == new Date().getDate() && date.getMonth() == new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`
        }
        monthDays.innerHTML = days;
    }

    let nextDays = (6 - lastWeekday);
    for (let n = 1; n <= nextDays; n++) {
        days += `<div class="next-date">${n}</div>`
        monthDays.innerHTML = days;
    }
}

function rendernextMonth() {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}

function renderPreviousMonth() {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
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
function showModal() {
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

function getNewBtnInfo() {
    showModal();
    //get title
    //get inital date
    //get end date
    //expire date
    //description
    //event type
}

function getCalendarBtnInfo() {
    showModal();
    //get title
    //get inital date should be pre-filled
    //get end date pre-filled ?
    //expire date
    //description
    //event type
}