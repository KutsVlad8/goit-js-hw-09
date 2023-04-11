//*
// 1.понять как это все работает!!!!!
// 1.создать функцию которая создает promise
// 2.сделать отдельно функции для fulfield & reject
// 3. связать разметку с promise
//*

const refs = {
  form: document.querySelector('.form'),
};

const form = {};

refs.form.addEventListener('change', textInput);
refs.form.addEventListener('submit', onButton);

function textInput(event) {
  form[event.target.name] = event.target.value;
}

function onButton(event) {
  event.preventDefault();
  console.log(form);
}

function createPromise({ delay, step, amount }) {
  return new Promise((resolve, reject) => {
    const time = step;

    const shouldResolve = Math.random() > 0.5;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ delay, step, amount });
      } else {
        reject({ delay, step, amount });
      }
    }, time);
  });
}

createPromise(1000, 2000, 3)
  .then(({ delay, step, amount }) => {
    console.log(`✅ Fulfilled promise ${amount} in ${step}ms`);
  })
  .catch(({ delay, step, amount }) => {
    console.log(`❌ Rejected promise ${amount} in ${step}ms`);
  });
