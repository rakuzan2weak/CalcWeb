const display = document.querySelector('input');

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else if (button.innerText === 'C') {
      display.value = '';
    } else {
      display.value += button.innerText;
    }
  });
});
