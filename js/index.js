function layout() {
  /* body */
  const body = document.querySelector('body');
  body.classList.add('body');

  /* textarea */
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');

  /* keyboard */
  const keyboard = document.createElement('div');
  keyboard.setAttribute('id', 'keyboard');

  /* block info */
  const blockInfo = document.createElement('div');
  blockInfo.classList.add('blockInfo');
  const os = document.createElement('p');
  os.classList.add('os');
  os.textContent = 'Клавиатура создана в операционной системе Windows';
  const langSwitch = document.createElement('p');
  langSwitch.classList.add('langSwitch');
  langSwitch.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
  blockInfo.append(os, langSwitch);

  /* вставляет элемент */
  body.append(textarea, keyboard, blockInfo);
}
layout();

//* constants and variables */
const outputField = document.querySelector('.textarea');

const keysArrey = [
  ['Backquote', '`'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'],
  ['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\'], ['Delete', 'Del'],
  ['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', "'"], ['Enter', 'Enter'],
  ['ShiftLeft', 'Shift'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ArrowUp', '▲'], ['ShiftRight', 'Shift'],
  ['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ArrowLeft', '◄'], ['ArrowDown', '▼'], ['ArrowRight', '►'], ['ControlRight', 'Ctrl'],
];

const exceptionButtons = ['Backquote', 'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'ControlLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight', 'ControlRight'];

/* выводит на экран кнопки клавиатуры из массива keysArrey */
function keyboardInitialization() {
  let out = '';
  keysArrey.forEach((elem) => {
    if (elem[1] === ' ') {
      out += `<div class="key space" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Backspace') {
      out += `<div class="key backspace" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Tab') {
      out += `<div class="key tab" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'CapsLock') {
      out += `<div class="key capslock" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Enter') {
      out += `<div class="key enter" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Shift') {
      out += `<div class="key shift" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[0] === 'ControlRight') {
      out += `<div class="key ctrl" data="${elem[0]}">${elem[1]}</div>`;
    } else {
      out += `<div class="key" data="${elem[0]}">${elem[1]}</div>`;
    }
  });
  document.querySelector('#keyboard').innerHTML = out;
}
keyboardInitialization();

/* добавляет цвет в момент нажатия на кнопку */
function changesColorWhenDown(event) {
  document.querySelector(`#keyboard .key[data="${event.code}"]`).classList.add('active');
}

/* удаляет цвет в момент отжатия кнопки */
function changesColorWhenUp() {
  document.querySelectorAll('#keyboard .key').forEach((elem) => {
    elem.classList.remove('active');
  });
}

/* выводит текст в textarea по нажатию на клавиатуру за исключением shift, ctrl, alt и т.д. */
function outTextClickKeyboard(event) {
  if (exceptionButtons.includes(event.code) === false) outputField.textContent += event.key;
}

/* выводит текст в textarea по нажатию на мышку за исключением shift, ctrl, alt и т.д. */
document.querySelectorAll('#keyboard .key').forEach((elem) => {
  elem.addEventListener('mousedown', () => {
    if (exceptionButtons.includes(elem.getAttribute('data')) === false) outputField.textContent += elem.textContent;
  });
});

document.addEventListener('keydown', changesColorWhenDown);
document.addEventListener('keydown', outTextClickKeyboard);
document.addEventListener('keyup', changesColorWhenUp);
