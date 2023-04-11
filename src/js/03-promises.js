const form = document.querySelector('.form');

const formData = {};

form.addEventListener('change', textInput);
form.addEventListener('submit', onSubmitButton);

function textInput(event) {
  formData[event.target.name] = Number(event.target.value);
}

function onSubmitButton(event) {
  event.preventDefault();

  const { delay, step, amount } = formData;

  if (delay < 0 || step < 0 || amount < 0) {
    console.log('Typed number must be greater than 0');
    return;
  }

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay + step * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.5;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
