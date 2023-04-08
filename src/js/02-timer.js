import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//*
//? 1. подключить бибилиотеку
//? 2. получить дату  при закрытие календаря
//? (проверить дату на соответствие)
//? 3. получить текущую дату
//? 4. получить разницу между выбранной датой и текущей.
//? 5. вывест на экран,отформатировав в дни,часы,минуты,секунды.
//? 6. при клике запустить интревал  который будет отбновляться каждую секунду.
//*

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', true);

let TIMER_DEADLINE = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    if (selectedDates[0] <= new Date()) {
      return window.alert('Please choose a date in the future');
    }
    refs.startBtn.removeAttribute('disabled', true);
    TIMER_DEADLINE = selectedDates[0];
    console.log(TIMER_DEADLINE.getTime);
  },
};

const flatPick = flatpickr('input#datetime-picker', options);

// const intervalId = setInterval(timeToEndTimer, 1000);

// timeToEndTimer();

// function timeToEndTimer() {
//   const now = new Date();

//   const dif = TIMER_DEADLINE - now;
//   console.log(convertMs(dif));

//   refs.days.textContent = convertMs(dif).days;
//   refs.hours.textContent = convertMs(dif).hours;
//   refs.minutes.textContent = convertMs(dif).minutes;
//   refs.seconds.textContent = convertMs(dif).seconds;
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
