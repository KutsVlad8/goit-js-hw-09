import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let TIMER_DEADLINE = null;
let intervalId = null;

refs.startBtn.addEventListener('click', startTimer);
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }

    TIMER_DEADLINE = selectedDates[0];
    refs.startBtn.disabled = false;
  },
};

const flatPick = flatpickr('input#datetime-picker', options);

function startTimer() {
  intervalId = setInterval(timeToEndTimer, 1000);
  refs.startBtn.disabled = true;
}

timeToEndTimer();

function timeToEndTimer() {
  const now = new Date();

  const diff = TIMER_DEADLINE - now;

  if (diff <= 1000) {
    clearInterval(intervalId);
    Notiflix.Report.success(
      'The time is up',
      'Select a date to run timer',
      'Select a date'
    );
  }

  if (TIMER_DEADLINE !== null) {
    refs.days.textContent = addZero(convertMs(diff).days);
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

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(number) {
  return String(number).padStart(2, 0);
}
