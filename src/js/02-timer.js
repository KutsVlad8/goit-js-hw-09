import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let TIMER_DEADLINE = null;
let intervalId = null;

refs.startBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', startTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      return window.alert('Please choose a date in the future');
    }
    refs.startBtn.removeAttribute('disabled', true);
    TIMER_DEADLINE = selectedDates[0];
  },
};

const flatPick = flatpickr('input#datetime-picker', options);

function startTimer() {
  intervalId = setInterval(timeToEndTimer, 1000);
}

timeToEndTimer();

function timeToEndTimer() {
  const now = new Date();

  const diff = TIMER_DEADLINE - now;

  if (diff <= 0) {
    clearInterval(intervalId);
  }

  if (TIMER_DEADLINE !== null) {
    refs.days.textContent = convertMs(diff).days;
    refs.hours.textContent = addZero(convertMs(diff).hours);
    refs.minutes.textContent = addZero(convertMs(diff).minutes);
    refs.seconds.textContent = addZero(convertMs(diff).seconds);
  }
  return;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(number) {
  return String(number).padStart(2, 0);
}
