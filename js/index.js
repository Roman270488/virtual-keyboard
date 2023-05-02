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
const keyBoard = document.querySelector('#keyboard');

const keysArreysEn = [
  ['Backquote', '`', 'ё', 'Ё'], ['Digit1', '1', '!'], ['Digit2', '2', '"'], ['Digit3', '3', '№'], ['Digit4', '4', ';'], ['Digit5', '5', '%'], ['Digit6', '6', ':'], ['Digit7', '7', '?'], ['Digit8', '8', '*'], ['Digit9', '9', '('], ['Digit0', '0', ')'], ['Minus', '-', '_'], ['Equal', '=', '+'], ['Backspace', 'Backspace'],
  ['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\'], ['Delete', 'Del'],
  ['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', "'"], ['Enter', 'Enter'],
  ['ShiftLeft', 'Shift'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ArrowUp', '▲'], ['ShiftRight', 'Shift'],
  ['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ArrowLeft', '◄'], ['ArrowDown', '▼'], ['ArrowRight', '►'], ['ControlRight', 'Ctrl'],
];
const keysArreysRu = [
  ['Backquote', 'ё'], ['Digit1', '1', '!'], ['Digit2', '2', '"'], ['Digit3', '3', '№'], ['Digit4', '4', ';'], ['Digit5', '5', '%'], ['Digit6', '6', ':'], ['Digit7', '7', '?'], ['Digit8', '8', '*'], ['Digit9', '9', '('], ['Digit0', '0', ')'], ['Minus', '-', '_'], ['Equal', '=', '+'], ['Backspace', 'Backspace'],
  ['Tab', 'Tab'], ['KeyQ', 'й'], ['KeyW', 'ц'], ['KeyE', 'у'], ['KeyR', 'к'], ['KeyT', 'е'], ['KeyY', 'н'], ['KeyU', 'г'], ['KeyI', 'ш'], ['KeyO', 'щ'], ['KeyP', 'з'], ['BracketLeft', 'х'], ['BracketRight', 'ъ'], ['Backslash', '\\'], ['Delete', 'Del'],
  ['CapsLock', 'CapsLock'], ['KeyA', 'ф'], ['KeyS', 'ы'], ['KeyD', 'в'], ['KeyF', 'а'], ['KeyG', 'п'], ['KeyH', 'р'], ['KeyJ', 'о'], ['KeyK', 'л'], ['KeyL', 'д'], ['Semicolon', 'ж'], ['Quote', 'э'], ['Enter', 'Enter'],
  ['ShiftLeft', 'Shift'], ['KeyZ', 'я'], ['KeyX', 'ч'], ['KeyC', 'с'], ['KeyV', 'м'], ['KeyB', 'и'], ['KeyN', 'т'], ['KeyM', 'ь'], ['Comma', 'б'], ['Period', 'ю'], ['Slash', '/'], ['ArrowUp', '▲'], ['ShiftRight', 'Shift'],
  ['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ArrowLeft', '◄'], ['ArrowDown', '▼'], ['ArrowRight', '►'], ['ControlRight', 'Ctrl'],
];

const exceptionButtons = ['Backquote', 'Backspace', 'Tab', 'Delete', 'CapsLock', /* 'Enter', */ 'ShiftLeft', 'ShiftRight', 'AltLeft', 'ControlLeft', /* 'Space', */ 'AltRight', /* 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',  */'ControlRight', 'MetaLeft'];

/* выводит на экран кнопки клавиатуры из массива keysArrey */
function keyboardInitialization(layoutKey) {
  let out = '';
  layoutKey.forEach((elem) => {
    if (elem[1] === ' ') {
      out += `<div class="key space not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Backspace') {
      out += `<div class="key backspace not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Tab') {
      out += `<div class="key tab not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Del') {
      out += `<div class="key not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'CapsLock') {
      out += `<div class="key capslock not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Enter') {
      out += `<div class="key enter not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Shift') {
      out += `<div class="key shift not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Alt') {
      out += `<div class="key not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[0] === 'ControlLeft') {
      out += `<div class="key not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[0] === 'ControlRight') {
      out += `<div class="key ctrl not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else if (elem[1] === 'Win') {
      out += `<div class="key not-simbol" data="${elem[0]}">${elem[1]}</div>`;
    } else {
      out += `<div class="key" data="${elem[0]}">${elem[1]}</div>`;
    }
  });
  keyBoard.innerHTML = out;
}

window.addEventListener('load', () => {
  if (localStorage.getItem('lang') === 'rus') {
    keyboardInitialization(keysArreysRu);
  } else if (localStorage.getItem('lang') === 'eng') {
    keyboardInitialization(keysArreysEn);
  }
});

let flag = false;
let lang = localStorage.getItem('lang');

/* меняет раскладку на клавиатуре */
document.addEventListener('keydown', (event) => {
  if (event.code === 'ControlLeft') flag = true;
  if (event.code === 'AltLeft' && flag === true && lang === 'eng') {
    localStorage.setItem('lang', 'rus');
    flag = false;
    lang = 'rus';
    keyboardInitialization(keysArreysRu);
  } else if (event.code === 'AltLeft' && flag === true && lang === 'rus') {
    localStorage.setItem('lang', 'eng');
    flag = false;
    lang = 'eng';
    keyboardInitialization(keysArreysEn);
  }
});

const outputField = document.querySelector('.textarea');

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

/* выводит текст в textarea по нажатию на клавиатуру */
function outTextClickKeyboard(event) {
  if (!exceptionButtons.includes(event.code)) {
    if (event.code === 'ArrowLeft') {
      outputField.value += '◄';
    } else if (event.code === 'ArrowDown') {
      outputField.value += '▼';
    } else if (event.code === 'ArrowUp') {
      outputField.value += '▲';
    } else if (event.code === 'ArrowRight') {
      outputField.value += '►';
    } else if (event.code === 'Backspace') {
      outputField.value += ' ';
    } else if (event.code === 'Enter') {
      outputField.value += '\n';
    } else {
      outputField.value += event.key;
    }
  }
}

/* выводит текст в textarea по нажатию на мышку */
keyBoard.addEventListener('click', (event) => {
  const elem = event.target.closest('#keyboard .key');
  // console.log(elem);
  // console.log(elem.textContent);
  if (!elem.classList.contains('not-simbol')) {
    outputField.value += elem.textContent;
  }
});

document.addEventListener('keydown', changesColorWhenDown);
document.addEventListener('keydown', outTextClickKeyboard);
document.addEventListener('keyup', changesColorWhenUp);
