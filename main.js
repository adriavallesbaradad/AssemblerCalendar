//CALENDAR VARIABLES
const date = new Date();
let weekday = date.getDay();
let day = date.getDate();
let month = date.getMonth();

//MODAL WAS OPENED WHERE?
let newEventbtn = true;

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let eventObj = {
    title: "",
    initialDate: "",
    endDate: "",
    expireDate: "",
    Description: "",
    eventType: ""
}

//CALENDAR SECTION HEADER
document.querySelector(".btnBackMonth").addEventListener("click", renderPreviousMonth);
document.querySelector(".btnNextMonth").addEventListener("click", rendernextMonth);
document.querySelector(".btnNewEvent").addEventListener("click", showModalbtn);

document.querySelector(".titleWeekdaySection").innerHTML = weekdays[weekday];
document.querySelector(".titleMonthEventSection").innerHTML = months[month] + " " + day;

//CALENDAR SECTION NUMBERS
document.querySelector(".days").addEventListener("click", showModalday);
document.querySelector(".btnCreate").addEventListener("click", createEvent);
// document.querySelector(".eventOnDay").addEventListener("click", eventList);

// function eventList(){
//     document.getElementById("eventDateSection").innerHTML = `<div${HOLA}</div>`;
// }

//SHOW CALENDAR
function renderCalendar() {

    weekday = date.getDay();
    day = date.getDate();
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
        if (i == new Date().getDate() && month == new Date().getMonth()) {
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
let modal = document.getElementById("eventModal");

// Get the button that opens the modal
let btn = document.getElementById("btnNewEvent");

// Get the button that creates the event
let btnCreate = document.getElementById("btnCreate");

// Get the button that cancels the event
let btnCancel = document.getElementById("btnCancel");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function showModalbtn() {
    modal.style.display = "block";
    newEventbtn = true;
}

// When the user clicks on a day, open the modal
function showModalday() {
    modal.style.display = "block";
    newEventbtn = false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// btnCancel.onclick = function (){
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function createEvent() {
    if (newEventbtn) {
        getEventInfo();
    } else {
        getEventInfo();
    }
}

function getNewBtnInfo() {}

function getCalendarBtnInfo() {
    //get inital date should be pre-filled
    //get end date pre-filled ?
}

function getEventInfo() {
    // let newEvent = new eventObj();
    // const modalInputs = document.querySelectorAll("#modalContent input");
    // modalInputs.forEach(element => {
    //     console.log(element);
    //     eventInfo += element.value;
    // });


    document.querySelector('#modalContent')
        .addEventListener('submit', e => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(e.target))
            console.log(data);
        })
}


