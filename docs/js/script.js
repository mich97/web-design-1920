const hotelOverview = document.getElementById('selected-hotel')
const roomOverview = document.getElementById('selected-room')
const checkinOverview = document.getElementById('selected-check-in')
const checkoutOverview = document.getElementById('selected-check-out')
const na = document.getElementById('na')
const monday = document.getElementById('monday')
const tuesday = document.getElementById('tuesday')
const wednesday = document.getElementById('wednesday')
const thursday = document.getElementById('thursday')
const friday = document.getElementById('friday')
const saturday = document.getElementById('saturday')
const sunday = document.getElementById('sunday')

function defaultHotel() {
    hotelOverview.innerHTML = "Sir Adam Hotel"
}

function dropdownHotel() {
    const selectedHotel = document.getElementById('hotel')
    hotelOverview.innerHTML = selectedHotel.value
}

function checkinMonday() {
    checkinOverview.innerHTML = "Upcoming monday"
    na.classList.add('d-none')
    tuesday.classList.remove('d-none')
}

function checkinTuesday() {
    checkinOverview.innerHTML = "Upcoming tuesday"
    na.classList.add('d-none')
    wednesday.classList.remove('d-none')
}

function checkinWednesday() {
    checkinOverview.innerHTML = "Upcoming wednesday"
    na.classList.add('d-none')
    thursday.classList.remove('d-none')
}

function checkinThursday() {
    checkinOverview.innerHTML = "Upcoming thursday"
    na.classList.add('d-none')
    friday.classList.remove('d-none')
}

function checkinFriday() {
    checkinOverview.innerHTML = "Upcoming friday"
    na.classList.add('d-none')
    saturday.classList.remove('d-none')
}

function checkinSaturday() {
    checkinOverview.innerHTML = "Upcoming saturday"
    na.classList.add('d-none')
    sunday.classList.remove('d-none')
}

function checkinSunday() {
    checkinOverview.innerHTML = "Upcoming sunday"
    na.classList.add('d-none')
    monday.classList.remove('d-none')
}

function dropdownCheckin() {
    const checkinDay = document.getElementById('check-in-day')
    const checkinMonth = document.getElementById('check-in-month')
    checkinOverview.innerHTML = checkinDay.value + " " + checkinMonth.value
}

function checkoutMonday() {
    checkoutOverview.innerHTML = "Upcoming monday"
}

function checkoutTuesday() {
    checkoutOverview.innerHTML = "Upcoming tuesday"
}

function checkoutWednesday() {
    checkoutOverview.innerHTML = "Upcoming wednesday"
}

function checkoutThursday() {
    checkoutOverview.innerHTML = "Upcoming thursday"
}

function checkoutFriday() {
    checkoutOverview.innerHTML = "Upcoming friday"
}

function checkoutSaturday() {
    checkoutOverview.innerHTML = "Upcoming saturday"
}

function checkoutSunday() {
    checkoutOverview.innerHTML = "Upcoming sunday"
}

function dropdownCheckout() {
    const checkoutDay = document.getElementById('check-out-day')
    const checkoutMonth = document.getElementById('check-out-month')
    checkoutOverview.innerHTML = checkoutDay.value + " " + checkoutMonth.value
}

function defaultRoom() {
    roomOverview.innerHTML = "1 person room"
}

function dropdownRoom() {
    const selectedRoom = document.getElementById('room-kind')
    roomOverview.innerHTML = selectedRoom.value
}

function resetOverview() {
    hotelOverview.innerHTML = "N/A"
    roomOverview.innerHTML = "N/A"
    checkinOverview.innerHTML = "N/A"
    checkoutOverview.innerHTML = "N/A"

    na.classList.remove('d-none')
    monday.classList.add('d-none')
    tuesday.classList.add('d-none')
    wednesday.classList.add('d-none')
    thursday.classList.add('d-none')
    friday.classList.add('d-none')
    saturday.classList.add('d-none')
    sunday.classList.add('d-none')
}