//CALENDAR VARIABLES
const date = new Date();
let weekday = date.getDay();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let eventObj = {
    title: "",
    initialDate: "",
    endDate: "",
    expireDate: "",
    description: "",
    eventType: ""
}

//CALENDAR SECTION HEADER
document.querySelector(".btnBackMonth").addEventListener("click", renderPreviousMonth);
document.querySelector(".btnNextMonth").addEventListener("click", rendernextMonth);
document.querySelector(".btnNewEvent").addEventListener("click", showModalbtn);

document.querySelector(".titleWeekdaySection").innerHTML = weekdays[weekday];
document.querySelector(".titleMonthEventSection").innerHTML = months[month] + " " + day;

//CALENDAR SECTION NUMBERS
let newEvent = document.querySelector(".eventOnDay");
// document.querySelector(".days").addEventListener("click", showModalday);
// document.querySelector(".eventOnDay").addEventListener("click", eventList);

//EVENT TAB
document.querySelector("#btnCreateEvent").addEventListener("click", createEvent);

//SHOW CALENDAR
function renderCalendar() {

    weekday = date.getDay();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    let divDate;

    let monthDays = document.querySelector(".days");
    let days = "";

    //CALENDAR SECTION HEADER
    document.querySelector(".titleYear").innerHTML = year;
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
        divDate = `${year}/${month}/${lastMonthDays - p}`;
        days += `<div data-date="${divDate}" class="prev-date divBtn">${lastMonthDays - p}
        <button data-date="${divDate}" class="eventOnDay">+</button></div>`;
        monthDays.innerHTML = days;
    }

    for (let i = 1; i <= lastDayoftheMonth; i++) {
        divDate = `${year}/${month + 1}/${i}`;
        if (i == new Date().getDate() && (month == new Date().getMonth() && year == new Date().getFullYear())) {

            days += `<div data-date="${divDate}" class="today divBtn">${i}
            <button data-date="${divDate}" class="eventOnDay">+</button></div>`;
        } else {
            days += `<div data-date="${divDate}" class="divBtn">${i}
            <button data-date="${divDate}" class="eventOnDay">+</button></div>`
        }
        monthDays.innerHTML = days;
    }

    let nextDays = (6 - lastWeekday);
    for (let n = 1; n <= nextDays; n++) {
        divDate = `${year}/${month + 2}/${n}`;
        days += `<div data-date="${divDate}" class="next-date divBtn">${n}<button data-date="${divDate}" class="eventOnDay">+</button></div>`
        monthDays.innerHTML = days;
    }

    calendarNumberButtons();
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
calendarNumberButtons();

//MODAL SECTION

// Get the modal
let modal = document.getElementById("eventModal");

// Get the button that opens the modal
let btn = document.getElementById("btnNewEvent");

// Get the button that creates the event
// let btnCreate = document.getElementById("btnCreate");

// Get the button that cancels the event
let btnCancel = document.getElementById("btnCancel");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function showModalbtn() {
    modal.style.display = "block";
    document.getElementById("initialDate").value = '';
}

// When the user clicks on a day, open the modal
function showModalday(e) {
    modal.style.display = "block";

    console.log(e.target.dataset.date);
    let localDate = new Date(e.target.dataset.date);
    localDate.setHours(new Date().getHours());
    localDate.setMinutes(new Date().getMinutes());
    console.log(localDate);
    document.getElementById("initialDate").value = localDate.toISOString().slice(0, 16);
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

function getCalendarBtnInfo() {
    //get inital date should be pre-filled
    //get end date pre-filled ?
}

function getEventInfo() {
    document.querySelector('#modalContent').addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        let event = eventObj;
        console.log(data);
        console.log("title", data.title);
        event.title = data.title;
        console.log("initial date", data.initialDate);
        event.initialDate = data.initialDate;
        console.log("end date", data.endDate);
        event.endDate = data.endDate;
        console.log(document.querySelector("#textarea").value);
        event.description = document.querySelector("#textarea").value;
        console.log(document.querySelector("#eventType").value);
        event.eventType = document.querySelector("#eventType").value;
    })
}

const btnCheckEndDate = document.querySelector("#endDateCheckBox");
btnCheckEndDate.addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("titleEndDate").textContent = "End Date: ";
        document.getElementById("endDate").style.display = "block";
    } else {
        document.getElementById("endDate").style.display = "none";
        document.getElementById("titleEndDate").textContent = "";
    }
})

//CALENDAR NUMBER BUTTONS

function calendarNumberButtons() {
    const divBtn = document.querySelectorAll(".divBtn");
    const btnCreate = document.querySelectorAll(".eventOnDay");

    for (const elementDivBtn of divBtn) {
        elementDivBtn.addEventListener("click", showInfo);
    }

    for (const elementBtnCreate of btnCreate) {
        elementBtnCreate.addEventListener("click", showCreateModal);
    }

    function showInfo() {
        console.log("info");
    }

    function showCreateModal(e) {
        e.stopPropagation();
        showModalday(e);
    }
}